import Image from "next/image";
export default function ArtPieceDetails({ piece }) {
  const { artist, name, imageSource, year, genre } = piece;
  return (
    <li>
      <Image src={imageSource} width={500} height={500} alt={name} />
      <div>
        <h2>{name}</h2>
        <p>by {artist}</p>
        <p>{year}</p>
        <p>{genre}</p>
      </div>
    </li>
  );
}
