import type { RequestStatus } from "model/request-status";
import { createContext, useContext, useState, type ReactNode } from "react";
import { api } from "service/axios";

interface MovieProviderProps {
  children: ReactNode;
}

interface MovieContextProps {
  findAllMovies: () => Promise<void>;
  findAllMoviesRequestStatus: RequestStatus;
  allMovies: any[];
  findMovieById: (id: string) => Promise<void>;
  findMovieByIdRequestStatus: RequestStatus;
  movieById: any;
  createMovie: () => Promise<void>;
  createMovieRequestStatus: RequestStatus;
  deleteMovie: (id: string) => Promise<void>;
  deleteMovieRequestStatus: RequestStatus;
  editMovie: (id: string) => Promise<void>;
  editMovieRequestStatus: RequestStatus;
}

const MovieContext = createContext<MovieContextProps>({} as MovieContextProps);

// eslint-disable-next-line react-refresh/only-export-components
export const useMovie = () => {
  return useContext(MovieContext);
};

export const MovieProvider = ({ children }: MovieProviderProps) => {
  const [findAllMoviesRequestStatus, setFindAllMoviesRequestStatus] =
    useState<RequestStatus>({
      status: "idle",
    });
  const [findMovieByIdRequestStatus, setFindMovieByIdRequestStatus] =
    useState<RequestStatus>({
      status: "idle",
    });

  const [createMovieRequestStatus, setCreateMovieRequestStatus] =
    useState<RequestStatus>({
      status: "idle",
    });

  const [deleteMovieRequestStatus, setDeleteMovieRequestStatus] =
    useState<RequestStatus>({
      status: "idle",
    });

  const [editMovieRequestStatus, setEditMovieRequestStatus] =
    useState<RequestStatus>({
      status: "idle",
    });

  const [allMovies, setAllMovies] = useState<any[]>([]);
  const [movieById, setMovieById] = useState<any>(null);

  const findAllMovies = async () => {
    setFindAllMoviesRequestStatus({ status: "pending" });

    try {
      const response = await api.get("/movies");
      setAllMovies(response.data);
      setFindAllMoviesRequestStatus({ status: "succeeded" });
    } catch (error) {
      console.log(error);
      setFindAllMoviesRequestStatus({ status: "failed" });
    }
  };

  const findMovieById = async (id: string) => {
    setFindMovieByIdRequestStatus({ status: "pending" });
    try {
      const response = await api.get(`/movies/${id}`);
      setMovieById(response.data);
      setFindMovieByIdRequestStatus({ status: "succeeded" });
    } catch (error) {
      console.log(error);
      setFindMovieByIdRequestStatus({ status: "failed" });
    }
  };

  // passar o data para a requisição, criar os models para cada requisição
  const createMovie = async () => {
    setCreateMovieRequestStatus({ status: "pending" });
    try {
      await api.post("/movies");
      setCreateMovieRequestStatus({ status: "succeeded" });
    } catch (error) {
      console.log(error);
      setCreateMovieRequestStatus({ status: "failed" });
    }
  };

  const deleteMovie = async (id: string) => {
    setDeleteMovieRequestStatus({ status: "pending" });
    try {
      await api.delete(`/movies/${id}`);
      setDeleteMovieRequestStatus({ status: "succeeded" });
    } catch (error) {
      console.log(error);
      setDeleteMovieRequestStatus({ status: "failed" });
    }
  };

  const editMovie = async (id: string) => {
    setEditMovieRequestStatus({ status: "pending" });
    try {
      await api.put(`/movies/${id}`);
      setEditMovieRequestStatus({ status: "succeeded" });
    } catch (error) {
      console.log(error);
      setEditMovieRequestStatus({ status: "failed" });
    }
  };

  return (
    <MovieContext.Provider
      value={{
        findAllMovies,
        findAllMoviesRequestStatus,
        allMovies,
        findMovieById,
        findMovieByIdRequestStatus,
        movieById,
        createMovie,
        createMovieRequestStatus,
        deleteMovie,
        deleteMovieRequestStatus,
        editMovie,
        editMovieRequestStatus,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
