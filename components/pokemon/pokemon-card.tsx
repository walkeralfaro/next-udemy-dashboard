import Image from "next/image";
import { Button } from "../ui/button";
import { Card, CardContent, CardTitle } from "../ui/card";
import { SimplePokemon } from "@/schemas";
import Link from "next/link";

export default function PokemonCard({ pokemon }: { pokemon: SimplePokemon }) {
  return (
    <Card className="w-48 py-0">
      <CardContent className="p-3">
        <div className="aspect-square rounded-md bg-gray-100 mb-2">
          <div className="flex items-center justify-center h-full text-muted-foreground text-xs">
            <div className="relative w-24 h-24">
              <Image
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
                fill
                alt={pokemon.name}
                priority={false}
              />
            </div>
          </div>
        </div>

        <CardTitle className="text-sm mb-1 capitalize">{pokemon.name}</CardTitle>

        <div className="flex items-center justify-between mt-4">
          <Link href={`/dashboard/pokemon/${pokemon.id}`} className="w-full">
            <Button size="sm" className="text-xs px-2 py-1 h-7 w-full cursor-pointer">Más información</Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}