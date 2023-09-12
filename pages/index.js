import useSWR from "swr";
import Image from "next/image";

const url = "https://example-apis.vercel.app/api/art";

export default function HomePage() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error, isLoading } = useSWR(url, fetcher);

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;
  console.log(data);

  // const { artist, name, imageSource } = data;

  return (
    <ul>
      <h1>Hello from Next.js</h1>
      {data.map((piece) => {
        return (
          <li key={piece.slug}>
            {piece.artist}{" "}
            <Image
              src={piece.imageSource}
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </li>
        );
      })}
    </ul>
  );
}
