import { useGetNowPlaying } from "../queries";
import MovieListPage from "../components/movie-list-page";

const NowPlayingPage = () => {
  return <MovieListPage useGetMovieHook={useGetNowPlaying} />;
};

export default NowPlayingPage;
