import useSWR from "swr";
import ArtPieces from "@/components/ArtPieces";

const url = "https://example-apis.vercel.app/api/art";

export default function HomePage() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  // fetching data
  const { data, error, isLoading } = useSWR(url, fetcher);

  // error und loading screen
  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;

  return <ArtPieces pieces={data} />;
}
