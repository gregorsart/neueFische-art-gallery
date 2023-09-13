import Image from "next/image";
export default function ArtPiecePreview({ piece }) {
  const { artist, name, imageSource } = piece;
  return (
    <li>
      <Image src={imageSource} width={500} height={500} alt={name} />
      <div>
        <h2>{name}</h2>
        <p>by {artist}</p>
      </div>
    </li>
  );
}
