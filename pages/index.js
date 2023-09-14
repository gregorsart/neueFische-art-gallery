import Spotlight from "@/components/Spotlight";

export default function SpotlightPage({
  pieces,
  isFavorite,
  onToggleFavorite,
  slug,
  artPiecesInfo,
}) {
  return (
    <Spotlight
      pieces={pieces}
      showTitle={false}
      isFavorite={isFavorite}
      onToggleFavorite={onToggleFavorite}
      slug={slug}
      artPiecesInfo={artPiecesInfo}
    />
  );
}
