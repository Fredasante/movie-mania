import { Movie } from "@/types/movie";
import MovieCard from "./MovieCard";

interface MovieSectionProps {
  title: string;
  movies: Movie[];
}

const MovieSection = ({ title, movies }: MovieSectionProps) => {
  return (
    <section className="p-3">
      <h2 className="h2">{title}</h2>
      <MovieCard movies={movies} />
    </section>
  );
};

export default MovieSection;
