

const getPokemon = async(id: string) => {
  const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`).then(res => res.json())

  return data
}

export default async function PokemonPageContent({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params

  const pokemonData = await getPokemon(id)

  return <p>ID: {JSON.stringify(pokemonData)}</p>
}
