import { Input } from "../presentation/atomic/molecules/Input";
import { MovieCard } from "../presentation/atomic/organisms/MovieCard";

export function Home() {
  const movies: any = [
    {
      id: 1,
      title: "Pobres Criaturas",
      genre: "Drama",
      year: 2023,
      rating: 4.5,
      image: "https://image.tmdb.org/t/p/w500/4XM8DUTQb3lhLemJC51Jx4a2EuA.jpg",
    },
    {
      id: 2,
      title: "Oppenheimer",
      genre: "Biografia",
      year: 2023,
      rating: 4.9,
      image: "https://image.tmdb.org/t/p/w500/bk0GylVL5MUhsL0JzQsyx8Wg1G7.jpg",
    },
    {
      id: 3,
      title: "Duna: Parte Dois",
      genre: "Ficção",
      year: 2024,
      rating: 4.7,
      image: "https://image.tmdb.org/t/p/w500/mFVOuR4H5E6NxY5GZTnT2fSPmyA.jpg",
    },
    {
      id: 4,
      title: "Homem-Aranha: Através do Aranhaverso",
      genre: "Animação",
      year: 2023,
      rating: 4.8,
      image: "https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
    },
    {
      id: 5,
      title: "Barbie",
      genre: "Comédia",
      year: 2023,
      rating: 4.2,
      image: "https://image.tmdb.org/t/p/w500/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg",
    },
    {
      id: 6,
      title: "John Wick 4: Baba Yaga",
      genre: "Ação",
      year: 2023,
      rating: 4.6,
      image: "https://image.tmdb.org/t/p/w500/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg",
    },
    {
      id: 7,
      title: "A Baleia",
      genre: "Drama",
      year: 2022,
      rating: 4.4,
      image: "https://image.tmdb.org/t/p/w500/jQ0gylJMxWSL490sy0RrPj1Lj7e.jpg",
    },
    {
      id: 8,
      title: "Super Mario Bros. O Filme",
      genre: "Animação",
      year: 2023,
      rating: 4.3,
      image: "https://image.tmdb.org/t/p/w500/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg",
    },
    {
      id: 9,
      title: "Guardiões da Galáxia Vol. 3",
      genre: "Aventura",
      year: 2023,
      rating: 4.7,
      image: "https://image.tmdb.org/t/p/w500/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg",
    },
    {
      id: 10,
      title: "Napoleão",
      genre: "Histórico",
      year: 2023,
      rating: 4.1,
      image: "https://image.tmdb.org/t/p/w500/hm3Noo8u1fG7D3xKxZ6V0A4aAFt.jpg",
    },
    {
      id: 11,
      title: "Missão: Impossível - Acerto de Contas",
      genre: "Ação",
      year: 2023,
      rating: 4.5,
      image: "https://image.tmdb.org/t/p/w500/NNxYkU70HPurnNCSiCjYAmacwm.jpg",
    },
    {
      id: 12,
      title: "Pantera Negra: Wakanda Para Sempre",
      genre: "Aventura",
      year: 2022,
      rating: 4.3,
      image: "https://image.tmdb.org/t/p/w500/sv1xJUazXeYqALzczSZ3O6nkH75.jpg",
    },
    {
      id: 13,
      title: "Avatar: O Caminho da Água",
      genre: "Ficção",
      year: 2022,
      rating: 4.6,
      image: "https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
    },
    {
      id: 14,
      title: "The Batman",
      genre: "Ação",
      year: 2022,
      rating: 4.7,
      image: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
    },
  ];

  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold font-luckiest text-gray-100">
          Explorar
        </h1>
        <Input iconName="MdSearch" onChange={() => {}} value="" />
      </div>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {movies.map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </div>
    </div>
  );
}
