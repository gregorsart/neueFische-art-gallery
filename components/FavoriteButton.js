import Image from "next/image";
import heart from "../assets/heart.svg";

export default function FavoriteButton({ isFavorite, onToggleFavorite, slug }) {
  return (
    <button>
      <Image src={heart} alt="heart" width="100" height="100" />
    </button>
  );
}
