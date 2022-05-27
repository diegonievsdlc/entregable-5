import axios from 'axios';
import React, { useEffect, useState } from 'react';

const PokemonCard = ({link}) => {
  const [dataPokemon, setDataPokemon] = useState({})
  useEffect(() => {
    axios.get(link)
      .then(res => setDataPokemon(res.data))
  }, [link])
  return (
    <div className='Card-pokemon'>
      <img src={dataPokemon.sprites?.other.home.front_default} alt="Pokemon" />
      <h2>{dataPokemon.name}</h2>
    </div>
  );
};

export default PokemonCard;