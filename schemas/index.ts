import { z } from "zod";

export const ResultSchema = z.object({
  name: z.string(),
  url: z.string(),
});

export type Result = z.infer<typeof ResultSchema>;

export const PokemonsSchema = z.object({
  count: z.number(),
  next: z.string().nullable(),
  previous: z.string().nullable(),
  results: z.array(ResultSchema),
});

export type Pokemons = z.infer<typeof PokemonsSchema>;

export const SimplePokemonSchema = z.object({
  id: z.string(),
  name: z.string(),
});

export type SimplePokemon = z.infer<typeof SimplePokemonSchema>;

