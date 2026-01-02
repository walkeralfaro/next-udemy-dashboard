const getPokemon = async (id: string) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
  return res.json()
}

export default async function PokemonPageContent({params,}: { params: Promise<{ id: string }>}) {
  const { id } = await params
  const pokemonData = await getPokemon(id)

  return <p>{pokemonData.name}</p>
}

