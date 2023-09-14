import Layout from "@/components/Layout";
import GlobalStyle from "../styles";
import useSWR from "swr";
import { useState } from "react";

const url = "https://example-apis.vercel.app/api/art";

export default function App({ Component, pageProps }) {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  // fetching data
  const { data, error, isLoading } = useSWR(url, fetcher);
  const [slug, setSlug] = useState("");
  const [artPiecesInfo, setArtPiecesInfo] = useState([]);

  function handleToggleFavorite(slug) {
    console.log("slug---", slug, artPiecesInfo);
    setSlug(slug);
    setArtPiecesInfo((artPiecesInfo) => {
      const info = artPiecesInfo.find((info) => info.slug === slug);

      if (info) {
        return artPiecesInfo.map((info) =>
          info.slug === slug ? { ...info, isFavorite: !isFavorite } : info
        );
      }

      return [...artPiecesInfo, { slug, isFavorite: true }];
    });
  }

  // const { isFavorite } = info;
  // console.log("isFavourite---", isFavorite);
  // error und loading screen
  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;
  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        pieces={data}
        // isFavorite={isFavorite}
        onToggleFavorite={handleToggleFavorite}
        slug={slug}
        artPiecesInfo={artPiecesInfo}
      />
      <Layout />
    </>
  );
}
