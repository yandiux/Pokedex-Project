import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import ProgressBar from '@ramonak/react-progress-bar'



const PokeInfo = () => {
    const [infoPok, setInfoPok] = useState()

    useEffect(() => {
    const URL_INFO = `https://pokeapi.co/api/v2/pokemon/${id}`
      axios.get(URL_INFO)
      .then(res => setInfoPok(res.data))
      .catch(err => console.log(err))

    } , [])
  const {id} = useParams()
  
  const HP_STAT = infoPok?.stats[0].base_stat;
  const DF_STAT = infoPok?.stats[2].base_stat;
  const AT_STAT = infoPok?.stats[1].base_stat;
  const SP_STAT = infoPok?.stats[5].base_stat;
  
  return (
    <article className='card3'>
      <div className='card2 infoPok'>
        <div className={infoPok?.types[0].type.name}>

        </div>
         <img 
        src={infoPok?.sprites.other["official-artwork"].front_default}
        alt=""/>
        <div className='container2'>
        <h1 className='id-box centerMedia'>#{infoPok?.id}</h1>
        <h1>{infoPok?.name}</h1>
         
         <span className='separator-top'><h4>Height :{infoPok?.height}</h4></span>
         <span className='separator separator-top'><h4>Weight :{infoPok?.weight}</h4></span>
          <h5>Type</h5>
          <div>
          <span className='abilitys up'><h4>{infoPok ?.types[0].type.name}</h4></span>
          </div>
          <h5>Abilities</h5>
          <div>
           <span className='abilitys up'><h4>{infoPok?.abilities[0]?.ability.name}</h4></span>
           <span className='abilitys up'> <h4>{infoPok?.abilities[1]?.ability.name}</h4></span>
          </div>
         
       
        
        

         <div>
            
            <h4>HP : {infoPok?.stats[0].base_stat}/150</h4>
            < ProgressBar className="Progress" completed={Math.floor((HP_STAT/150)*100)}/>

            <h4>DEFENSE :  {infoPok?.stats[2].base_stat}/150</h4>
            < ProgressBar className="Progress" completed={Math.floor((DF_STAT/150)*100)}/>
        
            <h4>ATTACK : {infoPok?.stats[1].base_stat}/150</h4>
            < ProgressBar className="Progress" completed={Math.floor((AT_STAT/150)*100)}/>
      
            <h4>SPEED : {infoPok?.stats[5].base_stat}/150</h4>
            < ProgressBar className="Progress" completed={Math.floor((SP_STAT/150)*100)}/>
            </div>
         
            <h3 className='separator-top'>Movements</h3>
          <span className='movements'>
              <h4 className='moves'>{infoPok?.moves[0].move.name}</h4>
              <h4 className='moves'>{infoPok?.moves[1]?.move.name}</h4>
              <h4 className='moves'>{infoPok?.moves[2]?.move.name}</h4>
              <h4 className='moves'>{infoPok?.moves[3]?.move.name}</h4>
              <h4 className='moves'>{infoPok?.moves[4]?.move.name}</h4>
              <h4 className='moves'>{infoPok?.moves[5]?.move.name}</h4>
              <h4 className='moves'>{infoPok?.moves[6]?.move.name}</h4>
              <h4 className='moves'>{infoPok?.moves[7]?.move.name}</h4>
          </span>
          </div>
          </div>
    </article>
  )
}

export default PokeInfo