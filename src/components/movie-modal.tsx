import { AnimatePresence, useViewportScroll } from "framer-motion";
import { IMovie, makeBgPath } from "../api";
import {
  Overlay,
  ModalCover,
  ModalTitle,
  ModalDescription,
  Modal,
} from "./shared";
import { useNavigate } from "react-router-dom";

export interface ModalProps {
  movieId: string | null;
  selectedMovie?: IMovie;
}

const MovieModal = ({ movieId, selectedMovie }: ModalProps) => {
  const navigate = useNavigate();
  const { scrollY } = useViewportScroll();

  const handleClickOverlay = () => {
    navigate("/");
  };

  return (
    <AnimatePresence>
      {movieId ? (
        <>
          <Overlay onClick={handleClickOverlay} />
          <Modal layoutId={movieId} style={{ top: scrollY.get() + 92 }}>
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
  );
};

export default MovieModal;
