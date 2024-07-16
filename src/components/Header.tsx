import Image from "next/image";
import Link from "next/link";
import SearchInput from "./SearchInput";

const Header = () => {
  return (
    <header className="header bg-dark-400">
      <div className="container">
        <Link href="/" className="logo flex items-center">
          <Image
            src="/logo.svg"
            width={33}
            height={33}
            alt="movie-mania logo"
          />
          <span className="text-gray-300 text-xl md:text-2xl font-bold ml-2 mr-4">
            MM
          </span>
        </Link>

        <SearchInput />
      </div>
    </header>
  );
};

export default Header;
