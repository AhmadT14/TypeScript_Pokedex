import { State } from './state';


export async function commandMapb(state: State): Promise<void> {
    const { PokeAPI, prevLocationsURL } = state;
    if (!prevLocationsURL) {
        console.log("you're on the first page");
        return;
    }
    const locationsData = await PokeAPI.fetchLocations(prevLocationsURL);
    if (locationsData.results) {
        for (const location of locationsData.results) {
            console.log(location.name);
        }
    }
    state.nextLocationsURL = locationsData.next ?? null;
    state.prevLocationsURL = locationsData.previous ?? null;
};