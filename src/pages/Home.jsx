import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Pokemons from '../componets/Pokemons'


function Home() {
  return (
    <div>Home
        <Pokemons></Pokemons>
        <Link to={'/to Agua'}> Agua </Link>


    </div>
  )
}

export default Home