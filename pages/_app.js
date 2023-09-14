import Layout from "@/components/Layout";
import GlobalStyle from "../styles";
import useSWR from "swr";
import { useState } from "react";

const url = "https://example-apis.vercel.app/api/art";

export default function App({ Component, pageProps }) {
  const [artPiecesInfo, setArtPiecesInfo] = useState([
    { slug: "organge-red", isFavorite: false },
  ]);

  function handleToggleFavorite(slug) {}

  // fetching data
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(url, fetcher);

  // error und loading screen
  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;
  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        pieces={data}
        isFavorite={isFavorite}
        onToggleFavorite={handleToggleFavorite}
        slug={slug}
      />
      <Layout />
    </>
  );
}
