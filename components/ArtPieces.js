import styled from "styled-components";
import ArtPiecePreview from "./ArtPiecePreview";
export default function ArtPieces({ pieces, artPiecesInfo, onToggleFavorite }) {
  return (
    <>
      <StyledUl>
        {pieces.map((piece) => {
          const { slug } = piece;
          return (
            <ArtPiecePreview
              key={slug}
              piece={piece}
              showTitle={true}
              artPiecesInfo={artPiecesInfo}
              onToggleFavorite={onToggleFavorite}
            />
          );
        })}
      </StyledUl>
    </>
  );
}

const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
