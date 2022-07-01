import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const PokeCard = ({ url }) => {
  const [pokemon, setPokemon] = useState();
    
  useEffect(() => {
    axios
      .get(url)
      .then((res) => setPokemon(res.data))
      .catch((err) => console.log(err));
  }, []);

  
  const navigate = useNavigate();

  const clickCard = () => navigate(`/pokedex/${pokemon.id}`);

  console.log(pokemon);

  return (
    <article onClick={clickCard} className="card-pokemon">
    <div className= {pokemon?.types[0].type.name}>
    <img
      src={pokemon?.sprites.other["official-artwork"].front_default}
      alt=""
    />
    <div className="card-stats" >
    <h2 className="margin nameCard">{pokemon?.name}</h2>
    <p className="margin up">
       {pokemon?.types[0].type.name}  {pokemon?.types[1]?.type.name}
    </p>
    <div>
      <span className="margin3">
        <div className="stat-name">
          HP
        </div>
        <div>
          {pokemon?.stats[0].base_stat}
        </div>

        <div className="stat-name">
          DEFENSE
        </div>
        <div>
          {pokemon?.stats[2].base_stat}
        </div>
      </span>

      <span className="margin4">
        <div className="stat-name">
          ATTACK
        </div>
        <div>
         {pokemon?.stats[1].base_stat}
        </div>
        <div className="stat-name">
          SPEED
          </div>
          <div> 
          {pokemon?.stats[5].base_stat} 
        </div>
      </span>
    </div>
    </div>
    </div>
  </article>

);
};
 
export default PokeCard;
