import MovieVideos from "@/components/MovieVideos";
import { Movie } from "@/types/movie";
import { getMovieDetails } from "@/utils/tmdb";
import Image from "next/image";
import { FaThumbsUp } from "react-icons/fa";

interface Params {
  id: string;
}

const page = async ({ params: { id } }: { params: Params }) => {
  const movieDetail: Movie = await getMovieDetails(id);

  return (
    <div className="container">
      <section className="grid sm:grid-cols-2 items-center w-full max-w-5xl rounded-lg overflow-hidden mx-auto my-6 md:my-10 2xl:my-16">
        <div className="h-[430px] text-gray-100">
          <Image
            src={`https://image.tmdb.org/t/p/original/${movieDetail.poster_path}`}
            alt={movieDetail.title}
            height={500}
            width={500}
            className="h-full w-full object-contain"
          />
        </div>

        <div className="p-6 text-gray-100">
          <h1 className="h2">{movieDetail.title}</h1>

          <div className="flex flex-wrap gap-4 lg:gap-10 text-sm font-semibold">
            <span className="">
              Release Date:
              <span className="text-primary-100 ml-1">
                {movieDetail.release_date}
              </span>
            </span>
            <div className="text-gray-200 flex items-center">
              <FaThumbsUp className="text-teal-500 mr-1" />
              {movieDetail.vote_count.toLocaleString()} votes
            </div>
          </div>

          <p className="my-4">{movieDetail.overview}</p>

          <div>
            {movieDetail.genres.map((genre: { id: number; name: string }) => (
              <span
                key={genre.id}
                className="inline-block bg-gray-200 text-slate-700 px-3 py-1 text-sm font-semibold mr-2 mt-3"
              >
                {genre.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      <MovieVideos id={id} />
    </div>
  );
};

export default page;
