import Spotlight from "@/components/Spotlight";

export default function SpotlightPage({
  pieces,
  onToggleFavorite,
  artPiecesInfo,
}) {
  return (
    <Spotlight
      pieces={pieces}
      showTitle={false}
      onToggleFavorite={onToggleFavorite}
      artPiecesInfo={artPiecesInfo}
    />
  );
}
