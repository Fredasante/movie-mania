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
    <div className="grid sm:grid-cols-2 items-center w-full max-w-5xl rounded-lg overflow-hidden mx-auto my-6 md:my-10 2xl:my-16">
      <div className="h-[430px]">
        <Image
          src={`https://image.tmdb.org/t/p/w500/${movieDetail.poster_path}`}
          alt={movieDetail.title}
          height={500}
          width={500}
          className="h-full w-full object-contain"
        />
      </div>

      <div className="p-6 text-gray-100">
        <h1 className="h2">{movieDetail.title}</h1>

        <div className="flex gap-4 text-sm font-bold">
          <span className="text-primary-100">{movieDetail.release_date}</span>
          <div className="text-gray-200 ml-7 flex items-center">
            <FaThumbsUp className="text-teal-500 mr-1" />
            {movieDetail.vote_count.toLocaleString()} votes
          </div>
        </div>

        <p className="my-5">{movieDetail.overview}</p>

        <div>
          {movieDetail.genres.map((genre: { id: number; name: string }) => (
            <span
              key={genre.id}
              className="inline-block bg-gray-200 text-slate-700 px-3 py-1 text-sm font-semibold mr-2"
            >
              {genre.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
