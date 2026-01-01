'use cache'

import PokemonGrid from "@/components/pokemon/pokemon-grid"
import { PokemonsSchema, SimplePokemon } from "@/schemas"

const getPokemons = async (limit = 10, offset = 0): Promise<SimplePokemon[]> => {

  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`,
    {
      next: { revalidate: 60 },
    }
  )

  // Error con FETCH
  if (!res.ok) {
    throw new Error('Error fetching pokemons')
  }

  const json = await res.json()
  const parsed = PokemonsSchema.safeParse(json)

  // Error con JSON
  if (!parsed.success) {
    throw new Error('Invalid pokemon schema')
  }

  const pokemons = parsed.data.results.map((pokemon) => ({
    id: pokemon.url.split("/").at(-2)!,
    name: pokemon.name,
  }))

  return pokemons
}

export default async function PokemonsPage() {
  const pokemons = await getPokemons(150)

  return (
    <div className="flex flex-col">
      <span className="text-5xl my-10">Listado de Pokemons <small>estático</small> </span>
      <PokemonGrid pokemons={pokemons} />
    </div>
  )
}
