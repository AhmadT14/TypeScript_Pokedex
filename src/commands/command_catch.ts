import { State } from "../state.js";
export async function commandCatch(state: State,pokemon: string): Promise<void> {
    if (!pokemon) {
    console.log('Please provide a Pokemon to catch.');
    return;
    }
    console.log(`Throwing a Pokeball at ${pokemon}...`);
    const random=Math.random();
    if(random < 0.5) {
        console.log(`${pokemon} was caught!`);
        console.log(`You may now inspect it with the inspect command.`);
        state.pokedex[pokemon] = (await state.PokeAPI.fetchPokemon(pokemon));
    } else {
        console.log(`${pokemon} escaped!`);
    }
}