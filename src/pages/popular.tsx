import { makeImagePath } from "../api";
import { useGetPopular } from "../queries";
import {
  PageWrapper,
  PageTitle,
  MovieList,
  MovieCard,
  MovieCardImage,
  MovieCardTitle,
} from "../components/shared";

const Popular = () => {
  const { data: popularMovies, isLoading } = useGetPopular();
  if (isLoading) {
    return <p>Loading popular movies...</p>;
  }

  return (
    <PageWrapper>
      <PageTitle>Popular</PageTitle>
      <MovieList>
        {popularMovies?.results.map((movie) => {
          return (
            <MovieCard key={movie.id}>
              <MovieCardImage src={makeImagePath(movie.poster_path)} />
              <MovieCardTitle>{movie.title}</MovieCardTitle>
            </MovieCard>
          );
        })}
      </MovieList>
    </PageWrapper>
  );
};

export default Popular;
