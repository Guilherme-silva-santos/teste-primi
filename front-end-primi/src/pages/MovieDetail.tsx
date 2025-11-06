import { useNavigate, useParams } from "react-router-dom";
import { IconButton } from "../presentation/atomic/atoms/IconButton";
import { RowDetail } from "../presentation/atomic/atoms/RowDetail";

import { useEffect } from "react";
import { useMovie } from ".././data/Movies/";

export function MovieDetail() {
  const { id } = useParams<{ id: string }>();

  const { findMovieById, movieById, deleteMovie } = useMovie();

  useEffect(() => {
    if (id) {
      findMovieById(id);
    }
  }, [id]);

  const navigate = useNavigate();

  const handleDelete = () => {
    if (!id) return;
    deleteMovie(id);
    navigate("/");
  };

  return (
    <div className="flex flex-wrap items-center justify-center md:flex-nowrap flex-row gap-10 ">
      <img
        src={movieById?.imageUrl}
        alt=""
        className="rounded-lg h-120 max-w-[300px] object-cover opacity-80"
      />
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-3">
          <div className="flex flex-row items-center justify-between">
            <IconButton
              iconName="MdArrowBack"
              text="Voltar"
              onClick={() => {
                navigate(-1);
              }}
            />
            <div className="flex flex-row gap-2">
              <IconButton
                iconSize={20}
                iconName="MdDelete"
                onClick={handleDelete}
              />
              <IconButton
                iconSize={20}
                iconName="MdEdit"
                onClick={() => {
                  navigate("/add-movie/" + id);
                }}
              />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-100 ">
            {movieById?.title}
          </h1>
          <RowDetail title="Ano:" description={movieById?.releaseYear ?? ""} />
          <RowDetail
            title="Classificação:"
            description={`${movieById?.rating} / 10`}
          />
        </div>
        <div>
          <p className="text-gray-300 text-justify">{movieById?.description}</p>
        </div>
      </div>
    </div>
  );
}
