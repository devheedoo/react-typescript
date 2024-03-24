import { useQuery } from "@tanstack/react-query";
import { getComingSoon, getMovie, getNowPlaying, getPopular } from "./api";

const DAY = 1000 * 60 * 60 * 24;
const dayCachingOption = { cacheTime: DAY, staleTime: DAY };

export const useGetPopular = () => {
  return useQuery(["popular"], getPopular, dayCachingOption);
};

export const useGetNowPlaying = () => {
  return useQuery(["now-playing"], getNowPlaying, dayCachingOption);
};

export const useGetComingSoon = () => {
  return useQuery(["coming-soon"], getComingSoon, dayCachingOption);
};

export const useGetMovie = (id: string) => {
  return useQuery(["movie", id], () => getMovie(id), dayCachingOption);
};
