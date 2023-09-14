import ArtPiecePreview from "./ArtPiecePreview";

export default function Spotlight({
  pieces,
  showTitle,
  isFavorite,
  onToggleFavorite,
  slug,
  artPiecesInfo,
}) {
  const randomNumber = Math.floor(Math.random() * pieces.length);
  const randomArtwork = pieces[randomNumber];
  return (
    <ArtPiecePreview
      piece={randomArtwork}
      showTitle={showTitle}
      isFavorite={isFavorite}
      onToggleFavorite={onToggleFavorite}
      slug={slug}
      artPiecesInfo={artPiecesInfo}
    />
  );
}
