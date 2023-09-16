import Image from "next/image";
import styled from "styled-components";
import FavoriteButton from "./FavoriteButton";
export default function ArtPieceDetails({
  piece,
  artPiecesInfo,
  onToggleFavorite,
}) {
  console.log("piece---", piece);
  const { artist, name, imageSource, year, genre, slug } = piece;
  return (
    <>
      <StyledH2>Detail Page for the Artwork</StyledH2>

      <StyledLi>
        {imageSource && (
          <StyledImage src={imageSource} width={500} height={500} alt={name} />
        )}
        <h2>{name}</h2>
        <StyledContainer>
          <p>
            <StyledSpan>by</StyledSpan> {artist}
          </p>
          <FavoriteButton
            slug={slug}
            onToggleFavorite={onToggleFavorite}
            artPiecesInfo={artPiecesInfo}
          />
        </StyledContainer>
        <StyledHr />
        <StyledContainer>
          <StyledP>{year}</StyledP>
          <StyledP>{genre}</StyledP>
        </StyledContainer>
      </StyledLi>
    </>
  );
}

// Styled Components

const StyledH2 = styled.h2`
  background-color: black;
  color: white;
  margin-top: -1rem;
  padding: 1.2rem var(--main-spacing);
  font-weight: 200;
  font-size: 1rem;
  text-transform: uppercase;
  width: 100%;
  text-align: center;
`;

const StyledLi = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 var(--main-spacing);
  list-style: none;
  font-size: 1rem;
  color: black;
  border: 2px solid var(--color-lightgray);
  border-radius: 0.4rem;
  padding: 1rem;
`;

const StyledImage = styled(Image)`
  object-fit: contain;
`;

const StyledContainer = styled.div`
  padding: 0 0.5rem;
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledHr = styled.hr`
  border: 1px solid var(--color-lightgray);
  margin-top: 1rem;
`;

const StyledP = styled.p`
  font-size: 0.8rem;
`;

const StyledSpan = styled.span`
  font-size: 0.8rem;
`;
