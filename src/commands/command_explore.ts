import { State } from '../state.js';

export async function commandExplore(state: State, location: string): Promise<void> {
  const { PokeAPI} = state;
   if (!location) {
    console.log('Please provide a location to explore.');
    return;
  }
    const locationsData = await PokeAPI.fetchLocation(location);
    console.log(`Found Pokemon:`);
    for (const pokemon_encounter of locationsData.pokemon_encounters) {
        console.log('- ' + pokemon_encounter.pokemon.name);
    }
};