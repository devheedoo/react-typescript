import { IAPIResponse, makeImagePath } from "../api";
import {
  PageWrapper,
  MovieList,
  MovieCard,
  MovieCardImage,
  MovieCardTitle,
} from "./shared";
import { useSearchParams } from "react-router-dom";
import MovieModal from "./movie-modal";
import { UseQueryResult } from "@tanstack/react-query";

export interface MovieListPageProps {
  useGetMovieHook: () => UseQueryResult<IAPIResponse, unknown>;
}

const MovieListPage = ({ useGetMovieHook }: MovieListPageProps) => {
  const { data: movies, isLoading } = useGetMovieHook();

  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get("id");

  const selectedMovie = id
    ? movies?.results.find((movie) => movie.id === +id)
    : undefined;

  const handleClickCard = (movieId: number) => {
    setSearchParams({ id: movieId + "" });
  };

  if (isLoading) {
    return <p>Loading movies...</p>;
  }

  const showingVariants = {
    hidden: { scale: 0, opacity: 0 },
    show: {
      scale: 1,
      opacity: 1,
      transition: { staggerChildren: 0.3, duration: 0.3 },
    },
  };

  const showingVariantsChild = {
    hidden: { scale: 0, opacity: 0 },
    show: { scale: 1, opacity: 1 },
  };

  return (
    <>
      <PageWrapper>
        <MovieList variants={showingVariants} initial="hidden" animate="show">
          {movies?.results.map((movie) => {
            return (
              <MovieCard
                key={movie.id}
                layoutId={movie.id + ""}
                onClick={() => handleClickCard(movie.id)}
                variants={showingVariantsChild}
              >
                <MovieCardImage
                  src={makeImagePath(movie.poster_path)}
                  whileHover={{ scale: 1.2, transition: { duration: 0.2 } }}
                />
                <MovieCardTitle>{movie.title}</MovieCardTitle>
              </MovieCard>
            );
          })}
        </MovieList>
      </PageWrapper>

      <MovieModal movieId={id} selectedMovie={selectedMovie} />
    </>
  );
};

export default MovieListPage;
