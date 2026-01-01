import PokemonPageContent from "@/app/dashboard/pokemons/pokemon/[id]/pokemon-page-content"
import { Suspense } from "react"

export default function PokemonPage(props: any) {
  return (
    <Suspense fallback={<p>Cargando Pokémon...</p>}>
      <PokemonPageContent {...props} />
    </Suspense>
  )
}
