"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchInput = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchQuery.trim() === "") return;

    router.push(`/search?query=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <form onSubmit={handleSearch} className="max-w-lg md:w-full">
      <div className="flex">
        <div className="relative w-full">
          <input
            className="block p-2.5 w-full z-20 text-sm text-slate-800 bg-gray-100 rounded-lg border-gray-300"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            type="submit"
            className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-teal-800 rounded-e-lg hover:bg-teal-700 focus:outline-none"
          >
            <FaSearch />
            <span className="sr-only">Search</span>
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchInput;
