import Pokecard from './Pokecard';

function Pokedex({ pokemons }) {

  //TODO: new lines
  return (
    <ul>
      {pokemons.map(p => <li><Pokecard id={p.id} name={p.name} type={p.type} base_experience={p.base_experience} /></li>)}
    </ul>
  );
}

export default Pokedex;

