import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function MovieDetail() {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<any>(null);

  useEffect(() => {
    fetch(`https://api.exemplo.com/movies/${id}`)
      .then((res) => res.json())
      .then(setMovie);
  }, [id]);

  if (!movie) return <p>Carregando...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{movie.title}</h1>
      <p className="text-gray-700 mt-2">{movie.description}</p>
    </div>
  );
}
