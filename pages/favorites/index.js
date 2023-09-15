import ArtPieces from "@/components/ArtPieces";
export default function Favorites({ pieces, artPiecesInfo, onToggleFavorite }) {
  // const favoritePiecesArray = artPiecesInfo.filter((piece) => {
  //   return piece.isFavorite === true;
  // });

  // const container = [];
  // favoritePiecesArray.forEach((element) => {
  //   const fruit = pieces.find((info) => info.slug === element.slug);
  //   if (fruit) container.push(fruit);
  // });

  // artPiecesInfo = [
  //   { slug: "red-green-blue", isFavorite: false },
  //   { slug: "red-purple-blue", isFavorite: true },
  // ];

  // Roland's Code // Solution
  const container = pieces.filter((piece) => {
    return artPiecesInfo.find((info) => info.slug === piece.slug)?.isFavorite;
  });

  // Alina's Code // works
  // const containerTwo = pieces.filter((piece) => {
  //   const buffer = artPiecesInfo.find((info) => info.slug === piece.slug);
  //   if (buffer) return buffer;
  //   else return null;
  // });

  return (
    <ArtPieces
      pieces={container}
      artPiecesInfo={artPiecesInfo}
      onToggleFavorite={onToggleFavorite}
    />
  );
}
