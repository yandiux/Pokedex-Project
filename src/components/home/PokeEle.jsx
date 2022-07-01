import React, { useEffect, useState } from "react";
import axios from "axios";
import PokeCard from "./pokedex/PokeCard";
import { useParams } from "react-router-dom";
import Loader from "./pokedex/Loader";

const PokeEle = () => {
  const [isType, setIsType] = useState();
  const [loading, setLoading] = useState(false)
  const {type} = useParams()
  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/type/${type}/`)
      .then((res) => setIsType(res.data, setLoading(false)))
      .catch((err) => console.log(err));
      setLoading (true)
      
  }, [type]);
  console.log(isType)
  
  return (
    
    <div className='header'>
      <div className='headerCircle'></div>
      <h1 className='pokedexx'><img src="https://archives.bulbagarden.net/media/upload/thumb/4/4b/Pok%C3%A9dex_logo.png/250px-Pok%C3%A9dex_logo.png" alt="" /></h1>
    
      {loading && <Loader/>}
     
     <div className='flex margiTop'> 
     
     {isType?.pokemon?.map(itype => (
        <PokeCard key={itype.pokemon.url} url={itype.pokemon.url} />
      ))}
      </div>
       
    </div>
  );
};

export default PokeEle;
