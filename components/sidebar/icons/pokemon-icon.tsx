import Image from "next/image";

export default function PokemonIcon() {
  return (
    <div>
      <Image src='/icons/pokemon.svg' width={16} height={16} alt="Pokemon Icon" />
    </div>
  )
}