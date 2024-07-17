import Image from "next/image";
import Link from "next/link";

const MovieCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      <div className="shadow-md hover:shadow-lg transition-shadow overflow-hidden rounded-lg w-full">
        <Link href={"/"}>
          <Image
            src="/upcoming-1.png"
            alt="listing cover"
            width={200}
            height={200}
            className="h-[320px] sm:h-[220px] w-full object-cover hover:scale-105 transition-scale duration-300"
          />
          <div className="p-3 flex flex-col gap-2 w-full">
            <p className="truncate text-lg font-semibold text-gray-50">Title</p>
            <div className="flex gap-4 w-full">
              <span className="font-bold text-primary-100 text-xs">
                Release Date
              </span>
              <div className="font-bold text-gray-200 text-xs">Vote Count</div>
            </div>
            <p className="text-sm text-gray-100 line-clamp-2">overview</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;
