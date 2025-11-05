import { Link } from "react-router-dom";
import { Header } from "../presentation/atomic/organisms/Header";

export function Home() {
  const movies = [
    { id: 1, title: "Inception" },
    { id: 2, title: "Interstellar" },
  ];

  return (
    <div className="min-h-screen w-full">
      <Header />
      <h1 className="text-2xl font-bold mb-4">Filmes</h1>
      <ul className="space-y-3">
        {movies.map((movie) => (
          <li key={movie.id} className="p-3 bg-gray-100 rounded-md">
            <Link
              to={`/movie/${movie.id}`}
              className="text-blue-600 hover:underline"
            >
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
