//TODO: add underscores
const POKEAPIURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'


function Pokecard ({ id, name, type, base_experience }) {
  const imgURL = `${POKEAPIURL}${id}.png`
  return (
    <div>
      <h1>{name}</h1>
      <img src = {imgURL} alt = "pokemon"/>
      <p>Type: {type}</p>
      <p>EXP: {base_experience}</p>
    </div>
  )
}

export default Pokecard;