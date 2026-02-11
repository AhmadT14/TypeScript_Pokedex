import { State } from "./state.js";
export async function commandCatch(state: State,pokemon: string): Promise<void> {
    console.log(`Throwing a Pokeball at ${pokemon}...`);
    const random=Math.random();
    if(random < 0.5) {
        console.log(`${pokemon} was caught!`);
        state.pokedex[pokemon] = (await state.PokeAPI.fetchPokemon(pokemon));
    } else {
        console.log(`${pokemon} escaped!`);
    }
}