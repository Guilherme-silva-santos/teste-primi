import type { CreateMovieRequest } from "model/create-movie-request";
import type { MovieById } from "model/get-movie-by-id-response";
import type { GetMoviesFilters, Movie } from "model/get-movie-response";
import type { RequestStatus } from "model/request-status";
import { createContext, useContext, useState, type ReactNode } from "react";
import { api } from "../../service/axios";

interface MovieProviderProps {
  children: ReactNode;
}

interface MovieContextProps {
  findAllMovies: (filters?: GetMoviesFilters) => Promise<void>;
  findAllMoviesRequestStatus: RequestStatus;
  allMovies: Movie[];

  findMovieById: (id: string) => Promise<void>;
  findMovieByIdRequestStatus: RequestStatus;
  movieById: MovieById | null;

  createMovie: (data: CreateMovieRequest) => Promise<void>;
  createMovieRequestStatus: RequestStatus;

  deleteMovie: (id: string) => Promise<void>;
  deleteMovieRequestStatus: RequestStatus;

  editMovie: (id: string, data: Partial<CreateMovieRequest>) => Promise<void>;
  editMovieRequestStatus: RequestStatus;
}

const MovieContext = createContext<MovieContextProps>({} as MovieContextProps);

// eslint-disable-next-line react-refresh/only-export-components
export const useMovie = () => useContext(MovieContext);

export const MovieProvider = ({ children }: MovieProviderProps) => {
  const [findAllMoviesRequestStatus, setFindAllMoviesRequestStatus] =
    useState<RequestStatus>({ status: "idle" });
  const [findMovieByIdRequestStatus, setFindMovieByIdRequestStatus] =
    useState<RequestStatus>({ status: "idle" });
  const [createMovieRequestStatus, setCreateMovieRequestStatus] =
    useState<RequestStatus>({ status: "idle" });
  const [deleteMovieRequestStatus, setDeleteMovieRequestStatus] =
    useState<RequestStatus>({ status: "idle" });
  const [editMovieRequestStatus, setEditMovieRequestStatus] =
    useState<RequestStatus>({ status: "idle" });

  const [allMovies, setAllMovies] = useState<Movie[]>([]);
  const [movieById, setMovieById] = useState<MovieById | null>(null);

  const findAllMovies = async (filters?: GetMoviesFilters) => {
    setFindAllMoviesRequestStatus({ status: "pending" });

    try {
      const response = await api.get<{ data: Movie[] }>("/movies", {
        params: filters,
      });

      setAllMovies(response.data.data);
      setFindAllMoviesRequestStatus({ status: "succeeded" });
    } catch (error) {
      console.error(error);
      setFindAllMoviesRequestStatus({ status: "failed" });
      alert("Erro ao carregar filmes");
    }
  };

  const findMovieById = async (id: string) => {
    setFindMovieByIdRequestStatus({ status: "pending" });
    try {
      const response = await api.get<MovieById>(`/movies/${id}`);
      setMovieById(response.data);
      setFindMovieByIdRequestStatus({ status: "succeeded" });
    } catch (error) {
      console.error(error);
      setFindMovieByIdRequestStatus({ status: "failed" });
      alert("Erro ao carregar filme");
    }
  };

  const createMovie = async (data: CreateMovieRequest) => {
    setCreateMovieRequestStatus({ status: "pending" });
    try {
      await api.post("/movies", data);
      setCreateMovieRequestStatus({ status: "succeeded" });
    } catch (error) {
      console.error(error);
      setCreateMovieRequestStatus({ status: "failed" });
      alert("Erro ao criar filme");
    }
  };

  const deleteMovie = async (id: string) => {
    setDeleteMovieRequestStatus({ status: "pending" });
    try {
      await api.delete(`/movies/${id}`);
      setDeleteMovieRequestStatus({ status: "succeeded" });
      alert("Filme deletado com sucesso");
    } catch (error) {
      console.error(error);
      setDeleteMovieRequestStatus({ status: "failed" });
      alert("Erro ao deletar filme");
    }
  };

  const editMovie = async (id: string, data: Partial<CreateMovieRequest>) => {
    setEditMovieRequestStatus({ status: "pending" });
    try {
      await api.put(`/movies/${id}`, data);
      setEditMovieRequestStatus({ status: "succeeded" });
      alert("Filme editado com sucesso");
    } catch (error) {
      console.error(error);
      setEditMovieRequestStatus({ status: "failed" });
      alert("Erro ao editar filme");
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
