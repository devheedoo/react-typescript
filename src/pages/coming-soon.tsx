import { useGetComingSoon } from "../queries";
import MovieListPage from "../components/movie-list-page";

const ComingSoonPage = () => {
  return <MovieListPage useGetMovieHook={useGetComingSoon} />;
};

export default ComingSoonPage;
