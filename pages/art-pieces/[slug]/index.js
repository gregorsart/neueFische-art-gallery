import ArtPieceDetails from "@/components/ArtPieceDetails";
import { useRouter } from "next/router";

export default function Slug({ pieces, artPiecesInfo, onToggleFavorite }) {
  // get route from URL
  const router = useRouter();
  const routerSlug = router.query.slug;
  // find artwork according to URL
  const artwork = pieces.find((arrayItem) => arrayItem.slug === routerSlug);

  return (
    <ArtPieceDetails
      piece={artwork}
      artPiecesInfo={artPiecesInfo}
      onToggleFavorite={onToggleFavorite}
    />
  );
}
