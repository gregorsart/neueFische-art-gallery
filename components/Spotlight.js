import { useEffect, useState } from "react";
import ArtPiecePreview from "./ArtPiecePreview";
import styled from "styled-components";

export default function Spotlight({
  pieces,
  showTitle,
  onToggleFavorite,
  artPiecesInfo,
}) {
  const [artWork, setArtWork] = useState({});
  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * pieces.length);
    const randomArtwork = pieces[randomNumber];
    setArtWork(randomArtwork);
  }, [pieces]);

  return (
    <StyledUl>
      <ArtPiecePreview
        piece={artWork}
        showTitle={showTitle}
        onToggleFavorite={onToggleFavorite}
        artPiecesInfo={artPiecesInfo}
      />
    </StyledUl>
  );
}

const StyledUl = styled.ul`
  display: flex;
  justify-content: center;
`;
