import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Pokemons from '../componets/Pokemons'



function Home({ pokemones }) {
  

  
  return (
    <div>
      <br />
     <Pokemons/>
    </div>
  )
}

export default Home