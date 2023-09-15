import ArtPieceDetails from "@/components/ArtPieceDetails";
import { useRouter } from "next/router";

export default function Slug({ pieces }) {
  const router = useRouter();
  const routerSlug = router.query.slug;

  const finddata = pieces.find((arrayItem) => {
    return arrayItem.slug === routerSlug;
  });

  return <ArtPieceDetails piece={finddata} />;
}
