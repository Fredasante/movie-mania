import Hero from "@/components/Hero";
import MovieCards from "@/components/MovieCards";

export default async function Home() {
  return (
    <div className="container">
      <Hero />

      <h2 className="h2">Upcoming Movies</h2>
      <MovieCards />
    </div>
  );
}
