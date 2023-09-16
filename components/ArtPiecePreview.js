import Image from "next/image";
import FavoriteButton from "./FavoriteButton";
import styled from "styled-components";
import Link from "next/link";

export default function ArtPiecePreview({
  piece,
  showTitle,
  onToggleFavorite,
  artPiecesInfo,
}) {
  const { artist, name, imageSource, slug } = piece;
  return (
    <StyledLi>
      <StyledLink href={`/art-pieces/${slug}`}>
        {imageSource && (
          <StyledImage src={imageSource} width={500} height={500} alt={name} />
        )}
        {showTitle && <h2>{name}</h2>}
      </StyledLink>
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
    </StyledLi>
  );
}

// Styled Components

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
  width: var(--max-width);
  max-width: var(--max-width);
`;

const StyledLink = styled(Link)`
  color: black;
  text-decoration: underline;
  text-underline-offset: 0.3rem;
  text-decoration-color: turquoise;
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

const StyledSpan = styled.span`
  font-size: 0.8rem;
`;
