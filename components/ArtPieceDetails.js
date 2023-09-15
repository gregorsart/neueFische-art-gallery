import Image from "next/image";
import FavoriteButton from "./FavoriteButton";
export default function ArtPieceDetails({
  piece,
  artPiecesInfo,
  onToggleFavorite,
}) {
  const { artist, name, imageSource, year, genre, slug } = piece;
  return (
    <li>
      <Image src={imageSource} width={500} height={500} alt={name} />
      <div>
        <h2>{name}</h2>
        <p>by {artist}</p>
        <p>{year}</p>
        <p>{genre}</p>
        <FavoriteButton
          slug={slug}
          onToggleFavorite={onToggleFavorite}
          artPiecesInfo={artPiecesInfo}
        />
      </div>
    </li>
  );
}
