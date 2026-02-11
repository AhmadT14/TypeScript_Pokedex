import { Cache } from "./pokecache.js";

export class PokeAPI {
  private static readonly baseURL = "https://pokeapi.co/api/v2";
  private cache: Cache = new Cache(1000 * 60 * 60);
  constructor() {}

  private checkCache<T>(key: string): boolean{
    const entry = this.cache.get<T>(key);
    if(!entry) return false;
    return true;
  }

  async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
    if(this.checkCache(pageURL ? pageURL : PokeAPI.baseURL + "/location-area")) {
      const entry = this.cache.get<ShallowLocations>(pageURL ? pageURL : PokeAPI.baseURL + "/location-area");
      if(entry) return entry.val;
    }
    try {     
      const url = pageURL ? pageURL : PokeAPI.baseURL + "/location-area";
      const response = await fetch(url, { method: "GET" });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      this.cache.add<ShallowLocations>(url, data);
      return data;
    } catch (error) {
      console.error(`Failed to fetch locations: ${error}`);
      throw error;
    }
  }

  async fetchLocation(locationName: string): Promise<Location> {
    if(this.checkCache(PokeAPI.baseURL + "/location-area/" + locationName)) {
      const entry = this.cache.get<Location>(PokeAPI.baseURL + "/location-area/" + locationName);
      if(entry) return entry.val;
    }
    try {      
      const response = await fetch(PokeAPI.baseURL + "/location-area/" + locationName, { method: "GET" });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      this.cache.add<Location>(PokeAPI.baseURL + "/location-area/" + locationName, data);
      return data;
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
    pokemon_encounters: {
      pokemon: {
        name: string;
        url: string;
      };
    }[];
}