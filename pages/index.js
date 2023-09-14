import Spotlight from "@/components/Spotlight";

export default function SpotlightPage({
  pieces,
  isFavorite,
  onToggleFavorite,
}) {
  return (
    <Spotlight
      pieces={pieces}
      showTitle={false}
      isFavorite={isFavorite}
      onToggleFavorite={onToggleFavorite}
    />
  );
}
