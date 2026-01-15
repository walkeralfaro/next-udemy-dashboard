import { Metadata } from "next"
import { Suspense } from "react"
import PokemonPageContent from "./pokemon-page-content"
import { getPokemon } from "@/lib/get-pokemon"

type Props = {
  params: Promise<{ id: string }>
}

// export async function generateStaticParams() {
//   return Array.from({ length: 151 }, (_, i) => ({
//     id: String(i + 1),
//   }))
// }

export async function generateStaticParams() {
  const res = await fetch(
    'https://pokeapi.co/api/v2/pokemon?limit=151'
  )
  const data = await res.json()

  return data.results.map((pokemon: { name: string }) => ({
    slug: pokemon.name,
  }))
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