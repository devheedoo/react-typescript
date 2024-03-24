import { useGetPopular } from "../queries";
import MovieListPage from "../components/movie-list-page";

const PopularPage = () => {
  return <MovieListPage useGetMovieHook={useGetPopular} />;
};

export default PopularPage;
