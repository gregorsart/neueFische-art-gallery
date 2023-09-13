import Layout from "@/components/Layout";
import GlobalStyle from "../styles";
import useSWR from "swr";

const url = "https://example-apis.vercel.app/api/art";

export default function App({ Component, pageProps }) {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  // fetching data
  const { data, error, isLoading } = useSWR(url, fetcher);

  // error und loading screen
  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} pieces={data} />
      <Layout />
    </>
  );
}
