'use cache'

import { PokemonsSchema, SimplePokemon } from "@/schemas"
import Image from "next/image"

const getPokemons = async (limit = 10, offset = 0): Promise<SimplePokemon[] | null> => {

  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`,
      {
        next: { revalidate: 60 },
      }
    )

    // Error con FETCH
    if (!res.ok) {
      return null
    }

    const json = await res.json()
    const parsed = PokemonsSchema.safeParse(json)

    // Error con JSON
    if (!parsed.success) {
      return null
    }

    const pokemons = parsed.data.results.map((pokemon) => ({
      id: pokemon.url.split("/").at(-2)!,
      name: pokemon.name,
    }))

    return pokemons

  } catch {
    return null
  }
}


export default async function PokemonsPage() {
  const pokemons = await getPokemons(150)

  if (!pokemons) {
    return (
      <div className="text-red-600">
        <h2>Error</h2>
        <p>No se pudieron cargar los pokémones.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <div className="flex flex-wrap gap-10 items-center">

        {
          pokemons.map(pokemon => (
            <div key={pokemon.id}>
              <div className="relative w-24 h-24">
                <Image
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
                  fill
                  alt="nombre"
                />
              </div>
              <p>{pokemon.name}</p>
            </div>

          ))
        }

      </div>
    </div>
  )
}
