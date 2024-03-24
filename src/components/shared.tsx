import { motion } from "framer-motion";
import styled from "styled-components";

export const PageWrapper = styled.div`
  margin: 0;
  padding: 0;
  background-color: #0e0e0e;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PageTitle = styled.h1`
  color: #e0e0e0;
  font-size: 48px;
  font-weight: bold;
  margin: 24px;
  text-transform: uppercase;
`;

export const MovieList = styled.div`
  margin-top: 24px;
  padding: 0 60px;
  display: flex;
  flex-wrap: wrap;
  gap: 60px;
`;

export const MovieCard = styled(motion.div)`
  width: 300px;
  overflow: hidden;
  border-radius: 24px;
  background-color: #0e0e0e;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding-bottom: 16px;
  cursor: pointer;
`;

export const MovieCardImage = styled(motion.img)`
  width: 100%;
  height: auto;
  mask-image: linear-gradient(to bottom, white 70%, transparent);
`;

export const MovieCardTitle = styled.span`
  color: #e0e0e0;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

export const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const Modal = styled(motion.div)`
  position: absolute;
  width: 50vw;
  height: 80vh;
  left: 0;
  right: 0;
  margin: 0 auto;
  border-radius: 24px;
  overflow: hidden;
  background-color: #0e0e0e;
`;

export const ModalCover = styled.div`
  width: 100%;
  background-size: cover;
  background-position: center center;
  height: 400px;
  mask-image: linear-gradient(to bottom, white 70%, transparent);
`;

export const ModalTitle = styled.h2`
  margin: 16px;
  color: #e0e0e0;
  font-size: 24px;
`;

export const ModalDescription = styled.p`
  margin: 16px;
  color: #e0e0e0;
`;
