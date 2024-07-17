import Hero from "@/components/Hero";
import MovieSection from "@/components/MovieSection";
import {
  getPopularMovies,
  getTopRatedMovies,
  getTrendingMovies,
  getUpcomingMovies,
} from "@/utils/tmdb";

export default async function Home() {
  const TopRatedMovies = await getTopRatedMovies();
  const upcomingMovies = await getUpcomingMovies();
  const TrendingMovies = await getTrendingMovies();
  const PopularMovies = await getPopularMovies();

  return (
    <div className="container">
      <Hero />
      <MovieSection title="Top Rated Movies" movies={TopRatedMovies} />
      <MovieSection title="Upcoming Movies" movies={upcomingMovies} />
      <MovieSection title="Trending Movies" movies={TrendingMovies} />
      <MovieSection title="Popular Movies" movies={PopularMovies} />
    </div>
  );
}
