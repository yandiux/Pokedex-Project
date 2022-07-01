import React from 'react'
import InputHome from './InputHome'

const HomeScreen = () => {

 
    
  
  return (
    <div className='header'>
    <div className='headerCircle'></div>
   <h1 className='pokedexx'><img src="https://archives.bulbagarden.net/media/upload/thumb/4/4b/Pok%C3%A9dex_logo.png/250px-Pok%C3%A9dex_logo.png" alt="" /></h1>
    <h1 className='homeMargin'>Podedex</h1>
    <h2 className='homeMargin'>¡Hola Entrenador!</h2>
    <InputHome />
  </div>
  )
}

export default HomeScreen