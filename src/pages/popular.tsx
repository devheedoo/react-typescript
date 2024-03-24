import { makeImagePath } from "../api";
import { useGetPopular } from "../queries";
import {
  PageWrapper,
  MovieList,
  MovieCard,
  MovieCardImage,
  MovieCardTitle,
} from "../components/shared";
import { useSearchParams } from "react-router-dom";
import MovieModal from "../components/movie-modal";

const Popular = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get("id");

  const { data: popularMovies, isLoading } = useGetPopular();
  const selectedMovie = id
    ? popularMovies?.results.find((movie) => movie.id === +id)
    : undefined;

  const handleClickCard = (movieId: number) => {
    setSearchParams({ id: movieId + "" });
  };

  if (isLoading) {
    return <p>Loading popular movies...</p>;
  }

  return (
    <>
      <PageWrapper>
        <MovieList>
          {popularMovies?.results.map((movie) => {
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

export default Popular;
