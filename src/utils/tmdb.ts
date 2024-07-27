import { Movie, MovieResponse, MovieVideo, VideoResponse } from "@/types/movie";

const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

const buildUrl = (
  endpoint: string,
  params: { [key: string]: string } = {}
): string => {
  const url = new URL(`${BASE_URL}${endpoint}`);

  url.searchParams.append("api_key", API_KEY as string);
  url.searchParams.append("language", "en-US");
  url.searchParams.append("page", "1");
  url.searchParams.append("include_adult", "false");

  Object.entries(params).forEach(([key, value]) => {
    url.searchParams.append(key, value);
  });

  return url.toString();
};

export const fetchData = async <T>(
  endpoint: string,
  params?: { [key: string]: string }
): Promise<T> => {
  const url = buildUrl(endpoint, params);

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(
        `Failed to fetch data from ${url} : ${response.statusText}`
      );
    }

    return response.json();
  } catch (error) {
    console.error(`Failed to fetch data from ${url} : ${error}`);
    return {} as T;
  }
};

export const getUpcomingMovies = async (
  limit: number = 5
): Promise<Movie[]> => {
  const data = await fetchData<MovieResponse>("/movie/upcoming");
  return data.results.slice(0, limit);
};

export const getTrendingMovies = async (
  limit: number = 5
): Promise<Movie[]> => {
  const data = await fetchData<MovieResponse>("/trending/movie/day");
  return data.results.slice(0, limit);
};

export const getPopularMovies = async (limit: number = 5): Promise<Movie[]> => {
  const data = await fetchData<MovieResponse>("/movie/popular");
  return data.results.slice(0, limit);
};

export const getTopRatedMovies = async (
  limit: number = 5
): Promise<Movie[]> => {
  const data = await fetchData<MovieResponse>("/movie/top_rated");
  return data.results.slice(0, limit);
};

export const getMovieDetails = async (id: string): Promise<Movie> => {
  return fetchData(`/movie/${id}`);
};

export const getMovieVideos = async (id: string): Promise<MovieVideo[]> => {
  const data = await fetchData<VideoResponse>(`/movie/${id}/videos`);
  return data.results;
};

export const searchMovies = async (query: string): Promise<Movie[]> => {
  const data = await fetchData<MovieResponse>("/search/movie", { query });
  return data.results;
};
