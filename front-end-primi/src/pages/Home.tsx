import { useEffect, useState } from "react";
import { useMovie } from "../data/Movies";
import { Input } from "../presentation/atomic/molecules/Input";
import { MovieCard } from "../presentation/atomic/organisms/MovieCard";

export function Home() {
  const { allMovies, findAllMovies, findAllMoviesRequestStatus } = useMovie();
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const limit = 8;

  useEffect(() => {
    findAllMovies({ title: search, page, limit });
  }, [search, page]);

  const handleSearchChange = (value: string) => {
    setSearch(value);
    setPage(1);
  };

  const handlePrevPage = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };

  return (
    <div className="gap-8 flex flex-col">
      <div className="flex flex-col gap-8 flex-1">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold font-luckiest text-gray-100">
            Explorar
          </h1>
          <Input
            iconName="MdSearch"
            onChange={handleSearchChange}
            value={search}
            placeholder="Pesquisar por título..."
          />
        </div>

        {findAllMoviesRequestStatus.status === "pending" && (
          <p className="text-gray-400 text-center">Carregando filmes...</p>
        )}

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 flex-1">
          {allMovies.map((movie) => (
            <MovieCard
              key={movie.id}
              year={movie.releaseYear}
              image={movie.imageUrl}
              rating={movie.rating}
              title={movie.title}
              id={movie.id}
            />
          ))}
        </div>
      </div>
      <div className="flex justify-center gap-4 items-center">
        <button
          onClick={handlePrevPage}
          disabled={page === 1}
          className="px-4 py-2 bg-gray-700 text-white rounded disabled:opacity-50"
        >
          Anterior
        </button>
        <span className="text-white">{page}</span>
        <button
          onClick={handleNextPage}
          className="px-4 py-2 bg-gray-700 text-white rounded disabled:opacity-50"
          disabled={allMovies.length < limit}
        >
          Próxima
        </button>
      </div>
    </div>
  );
}
