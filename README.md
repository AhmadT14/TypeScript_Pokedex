# Pokedex CLI

A command-line Pokedex application built with TypeScript that interacts with the [PokeAPI](https://pokeapi.co/).

## Acknowledgments

This project was developed as part of the Boot.dev backend development journey and was guided throughout the learning process.

## Features

- **Explore locations**: Browse Pokemon world locations and see which Pokemon can be found in each area
- **Catch Pokemon**: Attempt to catch Pokemon with a randomized catch mechanic
- **Pokedex management**: View and inspect your caught Pokemon
- **Caching**: Efficient API response caching to reduce network requests
- **Interactive REPL**: Command-line interface with persistent state

## Commands

- `help` - Displays available commands and descriptions
- `map` - Shows the next 20 location areas
- `mapb` - Shows the previous 20 location areas
- `explore <location>` - Lists Pokemon found in a specific location area
- `catch <pokemon>` - Attempts to catch a Pokemon
- `inspect <pokemon>` - Shows detailed information about a caught Pokemon
- `pokedex` - Displays all Pokemon in your Pokedex
- `exit` - Exits the application

## Installation

```bash
npm install
```

## Usage

### Development mode (build + run):
```bash
npm run dev
```

### Production mode:
```bash
npm run build
npm start
```

### Run tests:
```bash
npm test
```

## Example Session

```
Pokedex > map
canalave-city-area
eterna-city-area
pastoria-city-area
...

Pokedex > explore pastoria-city-area
Found Pokemon:
- psyduck
- golduck
- magikarp
- gyarados
...

Pokedex > catch pikachu
Throwing a Pokeball at pikachu...
pikachu was caught!

Pokedex > pokedex
Your Pokedex:
- pikachu

Pokedex > inspect pikachu
Name: pikachu
Height: 4
Weight: 60
Stats:
  - hp: 35
  - attack: 55
  - defense: 40
  ...
Types:
  - electric
```

## Project Structure

```
src/
  ├── main.ts              # Entry point
  ├── repl.ts              # REPL loop and input handling
  ├── state.ts             # Application state and command registry
  ├── PokeApi.ts           # API client with caching
  ├── pokecache.ts         # Cache implementation
  ├── command_*.ts         # Individual command implementations
  └── *.test.ts            # Test files
```

## Technologies

- **TypeScript** - Type-safe JavaScript
- **Node.js** - Runtime environment
- **PokeAPI** - Pokemon data source
- **Vitest** - Testing framework

## Learning Objectives

This project demonstrates:
- TypeScript module system and type safety
- API interaction and error handling
- Caching strategies for performance optimization
- REPL design patterns
- Command pattern implementation
- Asynchronous programming with async/await