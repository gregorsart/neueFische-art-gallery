import Image from "next/image";
import FavoriteButton from "./FavoriteButton";

export default function ArtPiecePreview({
  piece,
  showTitle,
  onToggleFavorite,
  artPiecesInfo,
}) {
  const { artist, name, imageSource, slug } = piece;
  return (
    <li>
      <Image src={imageSource} width={500} height={500} alt={name} />
      <div>
        {showTitle && <h2>{name}</h2>}
        <p>by {artist}</p>
        <FavoriteButton
          slug={slug}
          onToggleFavorite={onToggleFavorite}
          artPiecesInfo={artPiecesInfo}
        />
      </div>
    </li>
  );
}
