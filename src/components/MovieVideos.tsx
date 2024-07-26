import { MovieVideo } from "@/types/movie";
import { getMovieVideos } from "@/utils/tmdb";

interface MovieVideosProps {
  id: string;
}

const MovieVideos = async ({ id }: MovieVideosProps) => {
  const videos: MovieVideo[] = await getMovieVideos(id);

  // videos that are official trailers
  const officialTrailers = videos.filter(
    (video) => video.type === "Trailer" && video.site === "YouTube"
  );

  // Related videos (excluding the official trailer)
  const relatedVideos = videos
    .filter((video) => video.type !== "Trailer")
    .slice(0, 6);

  if (!officialTrailers.length && !relatedVideos.length) {
    return (
      <p className="text-gray-100 text-lg my-10 text-center">
        No videos available for this movie.
      </p>
    );
  }

  return (
    <div className="my-8 lg:my-12 p-3 text-gray-50">
      {officialTrailers.length > 0 && (
        <div className="mb-8 lg:mb-12">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            Official Trailer
          </h2>
          <div className="video-container">
            <iframe
              width="100%"
              height="315"
              src={`https://www.youtube.com/embed/${officialTrailers[0].key}`}
              title={officialTrailers[0].name}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <p className="mt-2">{officialTrailers[0].name}</p>
          </div>
        </div>
      )}

      {relatedVideos.length > 0 && (
        <div>
          <h3 className="text-xl md:text-2xl font-bold mb-5 ">
            Related Videos
          </h3>
          <div className="grid gap-7 lg:gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {relatedVideos.map((video) => (
              <div key={video.id} className="video-container">
                <iframe
                  width="100%"
                  height="200"
                  src={`https://www.youtube.com/embed/${video.key}`}
                  title={video.name}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <p className="mt-3">{video.name}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieVideos;
