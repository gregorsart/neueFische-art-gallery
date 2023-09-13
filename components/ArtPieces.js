import ArtPiecePreview from "./ArtPiecePreview";
export default function ArtPieces({ pieces }) {
  return (
    <>
      <h1>Art Gallery</h1>
      <ul>
        {pieces.map((piece) => {
          const { slug } = piece;
          return <ArtPiecePreview key={slug} piece={piece} showTitle={true} />;
        })}
      </ul>
    </>
  );
}
