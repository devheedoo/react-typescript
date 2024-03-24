import { makeImagePath } from "../api";
import { useGetComingSoon } from "../queries";
import {
  PageWrapper,
  PageTitle,
  MovieList,
  MovieCard,
  MovieCardImage,
  MovieCardTitle,
} from "../components/shared";

const ComingSoon = () => {
  const { data: comingSoonMovies, isLoading } = useGetComingSoon();
  if (isLoading) {
    return <p>Loading coming soon movies...</p>;
  }

  return (
    <PageWrapper>
      <MovieList>
        {comingSoonMovies?.results.map((movie) => {
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

export default ComingSoon;
