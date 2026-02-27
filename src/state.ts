import { Interface } from 'node:readline';
import { commandMap } from './commands/command_map.js';
import { commandMapb } from './commands/command_mapb.js';
import { PokeAPI, Pokemon } from './api/PokeApi.js';
import { commandExplore } from './commands/command_explore.js';
import { commandCatch } from './commands/command_catch.js';
import { commandInspect } from './commands/command_inspect.js';
import { commandPokedex } from './commands/command_pokedex.js';
const { createInterface} = await import('node:readline');
const { commandExit } = await import('./commands/command_exit.js');
const { commandHelp } =  await import('./commands/command_help.js');

export type CLICommand = {
  name: string;
  description: string;
  callback: ((state: State,...args: string[]) => Promise<void>);
};

export type State = {CLICommands: Record<string, CLICommand>, rl: Interface,PokeAPI: PokeAPI,nextLocationsURL: string | null, prevLocationsURL: string | null, pokedex: Record<string, Pokemon>};

export function initState(): State {
  const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'Pokedex > '
});

 function getCommands(): Record<string, CLICommand> {
  return {
    exit: {
      name: "exit",
      description: "Exits the pokedex",
      callback: commandExit,
    },
    help: {
      name: "help",
      description: "Displays a help message",
      callback: commandHelp,
    },
    map: {
      name: "map",
      description: "Displays the names of the next 20 location areas in the Pokemon world",
      callback: commandMap,
  },
  mapb: {
      name: "mapb",
      description: "Displays the names of the previous 20 location areas in the Pokemon world",
      callback: commandMapb,
  },
  explore: {
      name: "explore",
      description: "Displays the names of the Pokemon that can be found in a given location area.",
      callback: commandExplore,
  },
  catch: {
      name: "catch",
      description: "Attempts to catch a Pokemon.",
      callback: commandCatch,
  },
  inspect: {
      name: "inspect",
      description: "Displays detailed information about a specific Pokemon.",
      callback: commandInspect,
  },
  pokedex: {
      name: "pokedex",
      description: "Displays the list of Pokemon in your Pokedex.",
      callback: commandPokedex,
  },
}
}
return {CLICommands: getCommands(), rl, PokeAPI: new PokeAPI(), nextLocationsURL: null , prevLocationsURL: null, pokedex: {}};
}