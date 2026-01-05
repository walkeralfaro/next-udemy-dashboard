
import { Pokemon, PokemonSchema } from "@/schemas"

export const getPokemon = async (id: string): Promise<Pokemon> => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`, {
    cache: "force-cache",
  })

  if (!res.ok) {
    throw new Error("Pokemon not found")
  }

  const json = await res.json()
  const parsed = PokemonSchema.safeParse(json)

  if (!parsed.success) {
    throw new Error("Invalid Pokemon API response")
  }

  return parsed.data
}
