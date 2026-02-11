import { State } from './state';

export async function commandPokedex(state: State): Promise<void> {
    if (Object.keys(state.pokedex).length === 0) {
    console.log('Your Pokedex is empty.');
    return;
    }
    console.log('Your Pokedex:');
    for (const pokemonName in state.pokedex) {
        console.log(`- ${pokemonName}`);
    }
}