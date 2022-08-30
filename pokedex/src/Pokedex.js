import Pokecard from "./Pokecard";


function Pokedex({ pokeHand, score, isWinner }) {
  
  return (
    <div>
      <h2>Score: {score}</h2>
    <ul>
      {pokeHand.map((p) => (
        <li>
          <Pokecard
            id={p.id}
            name={p.name}
            type={p.type}
            base_experience={p.base_experience}
            />
        </li>
      ))}
    </ul>
      <h3>{isWinner}</h3>
    </div>
  );
}

export default Pokedex;

