import Pokedex from "./Pokedex";

const defaultPokemons = [
  { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
  { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
  { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
  { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
  { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
  { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
  { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
  { id: 133, name: "Eevee", type: "normal", base_experience: 65 },
];

function Pokegame({ cardDeck = defaultPokemons }) {
  let hand1 = [];
  let hand2 = [];

  let pokemons = cardDeck.slice();
  while (hand1.length < 4) {
    const RandomPokemon = selectRandomPokemon(pokemons);
    hand1.push(RandomPokemon);
    pokemons = remove(pokemons, RandomPokemon);
  }
  hand2 = pokemons;
  
  let hand1Sum = 0;
  for (let card of hand1) {
    hand1Sum += card.base_experience;
  }
  let hand2Sum = 0;
  for (let card of hand2) {
    hand2Sum += card.base_experience;
  }

  
  return (
    <div>
      
      <div>
        <h1>Player 1:</h1>
        <Pokedex 
        pokeHand={hand1} 
        score={hand1Sum} 
        isWinner = {hand1Sum > hand2Sum ? "THIS HAND WINS" : "You didn't win"}/>
      </div>
      <div>
        <h1>Player 2:</h1>
        <Pokedex 
        pokeHand={hand2} 
        score={hand2Sum} 
        isWinner = {hand2Sum > hand1Sum ? "THIS HAND WINS" : "You didn't win"}/>
      </div>

    </div>
  );
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

export default Pokegame;
