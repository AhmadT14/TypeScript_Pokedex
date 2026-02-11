export class PokeAPI {
  private static readonly baseURL = "https://pokeapi.co/api/v2";

  constructor() {}

  async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
    try {     
      const url = pageURL ? pageURL : PokeAPI.baseURL + "/location-area";
      const response = await fetch(url, { method: "GET" });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error(`Failed to fetch locations: ${error}`);
      throw error;
    }
  }

  async fetchLocation(locationName: string): Promise<Location> {
    try {      
      const response = await fetch(PokeAPI.baseURL + "/location/" + locationName, { method: "GET" });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error(`Failed to fetch location: ${error}`);
      throw error;
    }
  }
}

export type ShallowLocations = {
    count: number;
    next: string | null;
    previous: string | null;
    results: {
      name: string;
      url: string;
    }[];
  };

export type Location = {
    id: number;
    name: string;
    game_indices: {
      game_index: number;
      generation: {
        name: string;
        url: string;
      };
    }[];
    names: {
      name: string,
      language: {
        name: string;
        url: string;
      }
    }[],
    region: {
      name: string;
      url: string;
    };
     areas: {
      name: string;
      url: string;
    }[];
  };