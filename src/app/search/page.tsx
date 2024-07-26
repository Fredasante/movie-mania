"use client";

import MovieCard from "@/components/MovieCard";
import Spinner from "@/components/Spinner";
import { Movie } from "@/types/movie";
import { searchMovies } from "@/utils/tmdb";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const SearchPage = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const searchParams = useSearchParams();
  const query = searchParams.get("query");

  const fetchMovies = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await searchMovies(query ?? "");
      setMovies(data);
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "An unknown error occurred";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!query) {
      return;
    }

    fetchMovies();
  }, [query]);

  return (
    <section className="my-10 container">
      {loading && (
        <div className="flex justify-center items-center h-[100vh]">
          <Spinner />
        </div>
      )}

      {movies.length > 0 && (
        <h1 className="text-gray-50 h2 my-10">
          Search results for: <span className="text-primary-100">{query}</span>
        </h1>
      )}

      {!loading && !error && movies.length === 0 && (
        <p className="text-gray-50 text-xl text-center font-semibold">
          No movies found for <span className="text-primary-100">{query}</span>.
          Try a different search term.
        </p>
      )}

      {error && (
        <div className="text-red-500 text-xl mb-4 flex flex-col items-center justify-center">
          <p>Error: {error}</p>
          <button
            onClick={() => fetchMovies()}
            className="mt-2 bg-teal-600 text-white px-4 py-2 rounded"
          >
            Retry
          </button>
        </div>
      )}

      <MovieCard movies={movies} />
    </section>
  );
};

export default SearchPage;
