import { Movie } from "@/types/movie";
import Image from "next/image";
import Link from "next/link";
import { FaThumbsUp } from "react-icons/fa";

interface MovieCardProps {
  movies: Movie[];
}

const MovieCard = ({ movies }: MovieCardProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
      {movies.map((movie) => (
        <div
          key={movie.id}
          className="shadow-md hover:shadow-lg transition-shadow overflow-hidden rounded-lg w-full"
        >
          <Link href={`/movies/${movie.id}`}>
            <Image
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              width={200}
              height={200}
              className="h-[320px] sm:h-[220px] w-full object-cover hover:scale-105 transition-scale duration-300"
            />
            <div className="p-3 flex flex-col gap-2 w-full">
              <p className="truncate text-lg font-semibold text-gray-50">
                {movie.title}
              </p>
              <div className="flex gap-4">
                <span className="font-bold text-primary-100 text-xs">
                  {movie.release_date}
                </span>
                <div className="font-bold text-gray-200 text-xs ml-auto flex items-center">
                  <FaThumbsUp className="text-teal-500 mr-1" />
                  {movie.vote_count.toLocaleString()} votes
                </div>
              </div>
              <p className="text-sm text-gray-100 line-clamp-2 mt-4">
                {movie.overview}
              </p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MovieCard;
