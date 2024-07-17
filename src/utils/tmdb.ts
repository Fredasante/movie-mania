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

export const getUpcomingMovies = async (limit: number = 4) => {
  const data = await fetchMovies("/movie/upcoming");
  const limitedData = data.results.slice(0, limit);
  return limitedData;
};

export const getTrendingMovies = async (limit: number = 4) => {
  const data = await fetchMovies("/trending/movie/day");
  const limitedData = data.results.slice(0, limit);
  return limitedData;
};

export const getPopularMovies = async (limit: number = 4) => {
  const data = await fetchMovies("/movie/popular");
  const limitedData = data.results.slice(0, limit);
  return limitedData;
};

export const getTopRatedMovies = async (limit: number = 4) => {
  const data = await fetchMovies("/movie/top_rated");
  const limitedData = data.results.slice(0, limit);
  return limitedData;
};
