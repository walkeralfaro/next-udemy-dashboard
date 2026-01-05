import { Metadata } from "next"
import { Suspense } from "react"
import PokemonPageContent from "./pokemon-page-content"
import { getPokemon } from "@/lib/get-pokemon"

type Props = {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const pokemon = await getPokemon(id)

  return {
    title: `${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)} - Pokémon`,
    description: `Información sobre ${pokemon.name}`,
  }
}

export default function PokemonPage(props: Props) {
  return (
    <Suspense fallback={<p>Cargando Pokémon...</p>}>
      <PokemonPageContent {...props} />
    </Suspense>
  )
}

