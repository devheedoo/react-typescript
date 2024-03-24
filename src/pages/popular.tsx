import { makeBgPath, makeImagePath } from "../api";
import { useGetPopular } from "../queries";
import {
  PageWrapper,
  PageTitle,
  MovieList,
  MovieCard,
  MovieCardImage,
  MovieCardTitle,
  Overlay,
  Modal,
  ModalCover,
  ModalTitle,
  ModalDescription,
} from "../components/shared";
import { useNavigate, useParams } from "react-router-dom";
import { AnimatePresence, motion, useViewportScroll } from "framer-motion";

const Popular = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { scrollY } = useViewportScroll();

  const { data: popularMovies, isLoading } = useGetPopular();
  const selectedMovie = id
    ? popularMovies?.results.find((movie) => movie.id === +id)
    : null;

  const handleClickCard = (movieId: number) => {
    navigate(`/popular/${movieId}`);
  };

  const handleClickOverlay = () => {
    navigate("/");
  };

  if (isLoading) {
    return <p>Loading popular movies...</p>;
  }

  return (
    <>
      <PageWrapper>
        <PageTitle>Popular</PageTitle>
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

      <AnimatePresence>
        {id ? (
          <>
            <Overlay onClick={handleClickOverlay} />
            <Modal layoutId={id} style={{ top: scrollY.get() + 92 }}>
              {selectedMovie && (
                <>
                  <ModalCover
                    style={{
                      backgroundImage: `url(${makeBgPath(
                        selectedMovie.backdrop_path
                      )})`,
                    }}
                  />
                  <ModalTitle>{selectedMovie.title}</ModalTitle>
                  <ModalDescription>{selectedMovie.overview}</ModalDescription>
                </>
              )}
            </Modal>
          </>
        ) : null}
      </AnimatePresence>
    </>
  );
};

export default Popular;
