import Image from "next/image";

export default function FavoriteButton({
  onToggleFavorite,
  slug,
  artPiecesInfo,
}) {
  const currentIsFavorite = artPiecesInfo.find(
    (artWork) => artWork.slug === slug
  ) ?? { isFavorite: false };
  const { isFavorite } = currentIsFavorite;
  return (
    <button onClick={() => onToggleFavorite(slug)}>
      {isFavorite ? (
        <Image
          src="/assets/heart-solid.svg"
          alt="heart"
          width="40"
          height="40"
        />
      ) : (
        <Image
          src="/assets/heart-outline.svg"
          alt="heart"
          width="40"
          height="40"
        />
      )}
    </button>
  );
}
