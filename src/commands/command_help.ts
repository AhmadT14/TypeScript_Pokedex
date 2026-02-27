import { State } from '../state.js';

export async function commandHelp(state: State): Promise<void> {
  const { CLICommands } = state;
  console.log("Welcome to the Pokedex!");
  console.log("Usage:\n");
  for (const commandName in CLICommands) {
    const command = CLICommands[commandName];
    console.log(`${command.name}: ${command.description}`);
  }
};