import { State } from './state';


export async function commandMap(state: State): Promise<void> {
    const { PokeAPI, nextLocationsURL } = state;
    const locationsData = await PokeAPI.fetchLocations(nextLocationsURL ?? undefined);
    if (locationsData.results) {
        for (const location of locationsData.results) {
            console.log(location.name);
        }
    }
    state.nextLocationsURL = locationsData.next ?? null;
    state.prevLocationsURL = locationsData.previous ?? null;
};