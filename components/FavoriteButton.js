import Image from "next/image";

export default function FavoriteButton({
  onToggleFavorite,
  slug,
  artPiecesInfo,
}) {
  const info = jokesInfo.find((info) => info.id === id) ?? {
    isFunny: false,
  };
  const { isFunny } = info;

  console.log("artPiecesInfo", artPiecesInfo);

  const currentIsFavorite = artPiecesInfo.find(
    (artwork) =>
      artwork.slug === slug ?? {
        isFavorite: false,
      }
  );

  console.log("currentisFavouriteButton---", currentIsFavorite);
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
