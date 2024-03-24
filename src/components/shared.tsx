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

export const MovieCard = styled.div`
  width: 300px;
  overflow: hidden;
  border-radius: 24px;
  background-color: #0f0f0f;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding-bottom: 16px;
`;

export const MovieCardImage = styled.img`
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
