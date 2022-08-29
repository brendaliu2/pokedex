import Pokedex, { defaultPokemons } from "./Pokedex";
let hand1 = [];
let hand2 = [];

function Pokegame(cardDeck) {
  let pokemons = defaultPokemons.slice();
  while (hand1.length < 4) {
    const RandomPokemon = selectRandomPokemon(pokemons);
    hand1.push(RandomPokemon);
    pokemons = remove(pokemons, RandomPokemon);
  }
  hand2 = pokemons;
}

function remove(cardDeck, pokemon) {
  let remainingPokemon = [];
  for (let i of cardDeck) {
    if (i !== pokemon) {
      remainingPokemon.push(i);
    }
  }
  return remainingPokemon;
}

function selectRandomPokemon(cardDeck) {
  const idx = Math.floor(Math.random() * cardDeck.length);
  return cardDeck[idx];
}
