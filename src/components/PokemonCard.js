import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PokemonCard = ({ link }) => {
  const [dataPokemon, setDataPokemon] = useState({});
  const [colorCard, setColorCard] = useState({});
  useEffect(() => {
    axios.get(link).then((res) => setDataPokemon(res.data));
  }, [link]);
  useEffect(() => {
    if(dataPokemon.species !== undefined){
      axios.get(dataPokemon.species?.url).then((res) => setColorCard(res.data));
    }
  }, [dataPokemon])
  return (
    <Link to={`/pokedex/${dataPokemon.id}`}>
      <div
        className="Card-pokemon"
        style={{
          background: colorCard.color?.name,
          borderColor: colorCard.color?.name,
        }}
      >
        <img
          src={dataPokemon.sprites?.other.home.front_default || 
              dataPokemon.sprites?.front_default || 
              dataPokemon.sprites?.other['official-artwork'].front_default ||
              dataPokemon.sprites?.versions['generation-viii'].icons.front_default}
          alt="Pokemon"
        />
        <div className="poke-info">
          <h2>{dataPokemon.name}</h2>
          <ul className="types">
            {dataPokemon.types?.map((type) => (
              <li key={type.type.name}>{type.type.name}</li>
            ))}
          </ul>
          <span>Tipo</span>
          <ul className="poke-detail">
            <li>
              <h3>HP</h3>
              <p>{dataPokemon.stats?.[0].base_stat}</p>
            </li>
            <li>
              <h3>ATAQUE</h3>
              <p>{dataPokemon.stats?.[1].base_stat}</p>
            </li>
            <li>
              <h3>DEFENSA</h3>
              <p>{dataPokemon.stats?.[2].base_stat}</p>
            </li>
            <li>
              <h3>VELOCIDAD</h3>
              <p>{dataPokemon.stats?.[5].base_stat}</p>
            </li>
          </ul>
        </div>
      </div>
    </Link>
  );
};

export default PokemonCard;
