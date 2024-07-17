const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

const buildUrl = (endpoint: string): string => {
  const url = new URL(`${BASE_URL}${endpoint}`);
  url.searchParams.append("api_key", API_KEY as string);
  url.searchParams.append("language", "en-US");
  url.searchParams.append("page", "1");
  url.searchParams.append("include_adult", "false");
  return url.toString();
};

export const fetchMovies = async (endpoint: string) => {
  const url = buildUrl(endpoint);
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch movies");
  }
  return response.json();
};
