import { makeImagePath } from "../api";
import { useGetNowPlaying } from "../queries";
import {
  PageWrapper,
  MovieList,
  MovieCard,
  MovieCardImage,
  MovieCardTitle,
} from "../components/shared";
import { useSearchParams } from "react-router-dom";
import MovieModal from "../components/movie-modal";

const NowPlaying = () => {
  const { data: nowPlayingMovies, isLoading } = useGetNowPlaying();

  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get("id");

  const selectedMovie = id
    ? nowPlayingMovies?.results.find((movie) => movie.id === +id)
    : undefined;

  const handleClickCard = (movieId: number) => {
    setSearchParams({ id: movieId + "" });
  };

  if (isLoading) {
    return <p>Loading now playing movies...</p>;
  }

  return (
    <>
      <PageWrapper>
        <MovieList>
          {nowPlayingMovies?.results.map((movie) => {
            return (
              <MovieCard
                key={movie.id}
                layoutId={movie.id + ""}
                onClick={() => handleClickCard(movie.id)}
              >
                <MovieCardImage src={makeImagePath(movie.poster_path)} />
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

export default NowPlaying;
