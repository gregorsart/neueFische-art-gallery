import Image from "next/image";
export default function ArtPieces({ pieces }) {
  return (
    <ul>
      <h1>Art Gallery</h1>
      {pieces.map((piece) => {
        const { artist, name, imageSource, slug } = piece;
        return (
          <li key={slug}>
            <Image src={imageSource} width={500} height={500} alt={name} />
            <div>
              <h2>{name}</h2>
              <p>by {artist}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
