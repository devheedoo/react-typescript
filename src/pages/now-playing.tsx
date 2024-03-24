import { makeImagePath } from "../api";
import { useGetNowPlaying } from "../queries";
import {
  PageWrapper,
  PageTitle,
  MovieList,
  MovieCard,
  MovieCardImage,
  MovieCardTitle,
} from "../components/shared";

const NowPlaying = () => {
  const { data: nowPlayingMovies, isLoading } = useGetNowPlaying();
  if (isLoading) {
    return <p>Loading now playing movies...</p>;
  }

  return (
    <PageWrapper>
      <MovieList>
        {nowPlayingMovies?.results.map((movie) => {
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

export default NowPlaying;
