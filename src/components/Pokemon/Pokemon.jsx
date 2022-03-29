import React from 'react'

const Pokemon = ({pokemon}) => {
  return (
    <div>
      <img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} />
      <p>{pokemon.name}</p>
    </div>
  )
}

export default Pokemon