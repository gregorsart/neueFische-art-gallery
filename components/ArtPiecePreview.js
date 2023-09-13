import Image from "next/image";
export default function ArtPiecePreview({ piece, showTitle }) {
  const { artist, name, imageSource } = piece;
  return (
    <li>
      <Image src={imageSource} width={500} height={500} alt={name} />
      <div>
        {showTitle && <h2>{name}</h2>}
        <p>by {artist}</p>
      </div>
    </li>
  );
}
