import { State } from './state.js';

function cleanInput(str: string): string[]{return str.toLowerCase().trim().split(/\s+/)}

async function startREPL(initState: () => State) {
  const state = initState();
  const { rl, CLICommands } = state;
    rl.prompt();
    rl.on('line', async (line) => {
  const words = cleanInput(line);
  if(words.length === 0) {
    rl.prompt();
    return;
  }
    const commands = CLICommands;
    const commandName = words[0];
    const command = commands[commandName];
    if (command) {
      await command.callback(state,words[1]);
    } else {
      console.log(`Unknown command: ${commandName}`);
    }
    rl.prompt();
});
}

export {cleanInput,startREPL}