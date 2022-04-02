import React from 'react'

const Pokemon = ({pokemon}) => {
  return (
    <div className='pokemonContainer'>
      <h3>{(pokemon.name).toUpperCase()}</h3>
      <div className='imageContainer'><img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} /></div>
      <h3>#{pokemon.id}</h3>
      <p>{pokemon.height / 10}m</p>
      <p>{pokemon.weight / 10}kg</p>     
    </div>
  )
}

export default Pokemon