import ArtPiecePreview from "./ArtPiecePreview";

export default function Spotlight({ pieces, showTitle }) {
  const randomNumber = Math.floor(Math.random() * pieces.length);
  const randomArtwork = pieces[randomNumber];
  return <ArtPiecePreview piece={randomArtwork} showTitle={showTitle} />;
}
