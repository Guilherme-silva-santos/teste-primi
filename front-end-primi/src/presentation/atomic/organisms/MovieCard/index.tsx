import type { FC } from "react";
import { Link } from "react-router-dom";
import deafultImage from "../../../../assets/AdobeStock_440561250.jpeg";

interface MovieCardProps {
  id: string;
  title: string;
  year: number;
  rating: number;
  image: string;
}

export const MovieCard: FC<MovieCardProps> = ({
  id,
  title,
  year,
  rating,
  image,
}) => {
  return (
    <Link
      to={`/movie/${id}`}
      className="relative block overflow-hidden rounded-2xl bg-gray-900/50 hover:scale-[1.02] transition-transform duration-300"
    >
      <img
        src={image ?? deafultImage}
        alt={title}
        className="h-80 w-full object-cover opacity-80"
        loading="lazy"
      />

      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

      <div className="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-gray-800/80 px-2 py-1 text-sm font-medium text-white">
        ⭐ {rating.toFixed(1)} / 10
      </div>

      <div className="absolute bottom-3 left-3 right-3">
        <h3 className="font-bold text-white text-lg">{title}</h3>
        <p className="text-sm text-gray-300">{year}</p>
      </div>
    </Link>
  );
};
