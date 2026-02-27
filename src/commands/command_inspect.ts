import { State } from '../state.js';

export async function commandInspect(state: State, pokemon: string): Promise<void> {
    if (!pokemon) {
    console.log('Please provide a Pokemon to inspect.');
    return;
    }
    if(state.pokedex[pokemon]) {
        console.log(`Name: ${state.pokedex[pokemon].name}`);
        console.log(`Height: ${state.pokedex[pokemon].height}`);
        console.log(`Weight: ${state.pokedex[pokemon].weight}`);
        console.log(`States: `);
        for(const stat of state.pokedex[pokemon].stats) {
            console.log(`-${stat.stat.name}: ${stat.base_stat}`);
        }
        console.log(`Types: `);
        for(const type of state.pokedex[pokemon].types) {
            console.log(`- ${type.type.name}`);
        }
    }
    else{
        console.log(`you have not caught that pokemon`);
    }
}
