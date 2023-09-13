import ArtPiecePreview from "./ArtPiecePreview";
export default function ArtPieces({ pieces }) {
  return (
    <ul>
      <h1>Art Gallery</h1>
      {pieces.map((piece) => {
        const { slug } = piece;
        return <ArtPiecePreview key={slug} piece={piece} />;
      })}
    </ul>
  );
}
