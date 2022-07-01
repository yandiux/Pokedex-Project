import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Pagination from '../../../PaginationP'
import PokeCard from './PokeCard'
import PokeType from './PokeType'




const PokedexScreen = () => {

  const nameUser = useSelector(state => state.nameUser)

  const [pokemons, setPokemons] = useState()
  const [page, setPage] = useState(1)
  const [perPage, setPerPage] = useState(20)

  useEffect(() => {
    const URL_POKEMONS = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1154'
    axios.get(URL_POKEMONS)
      .then(res => setPokemons(res.data.results))
      .catch(err => console.log(err))
  }, [])

  console.log(pokemons)
  const max = pokemons?.length / perPage
  
  const [filterPokemon, setfilterPokemon] = useState()
  console.log(filterPokemon)
  
 
  return (

    <div className='header'>
      <div className='headerCircle'>
      </div>
      <h1 className='pokedexx'><img src="https://archives.bulbagarden.net/media/upload/thumb/4/4b/Pok%C3%A9dex_logo.png/250px-Pok%C3%A9dex_logo.png" alt="" /></h1>
      <h2 className='margiTop margiLeft'>Hola {nameUser}, bienvenido a la pokedex </h2>
      <h3 className='margiTop'><PokeType pokemons={pokemons} setfilterPokemon={setfilterPokemon}/></h3>
        
        
        <div className='superiorPages '>
        {/* <Pagination page={page} setPage={setPage} max={max} /> */}
      </div>
      <div className='flex'>
        {
          filterPokemon ?
          filterPokemon
          ?.slice((page - 1) * perPage, (page - 1) * perPage + perPage
          ).map( pokemon => (
            <PokeCard
              key={ pokemon.url }
              url={ pokemon.url }
              />
          ))
        :
            pokemons
            ?.slice((page - 1) * perPage, (page - 1) * perPage + perPage
            ).map( pokemon => (
              <PokeCard
                key={ pokemon.url }
                url={ pokemon.url }
                />
            ))
        }
        <div className='pages'>
        <Pagination page={page} setPage={setPage} max={max} />
      </div>
      </div>
      </div>
      
  )
}

export default PokedexScreen