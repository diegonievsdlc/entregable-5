import axios from "axios";
import ornament from "../assets/Group 216 (2).png";
import logo from "../assets/image 11.png";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PokeItem = () => {
  const { id } = useParams();
  const [pokeData, setPokeData] = useState();
  const [colorCard, setColorCard] = useState({});
  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then((res) => setPokeData(res.data));
    axios.get(pokeData?.species.url).then((res) => setColorCard(res.data));
  }, [id, pokeData]);
  return (
    <div className="Pokemon-item">
      <img className="ornament-pokedex" src={ornament} alt="Ornament" />
      <img className="logo-pokedex" src={logo} alt="Logo" />
      <div>
        <div className="Pokemon-detail" style={{background: colorCard.color?.name,}}>
          <img src={pokeData?.sprites.other.home.front_default} alt="Pokemon" />
          <div>
            <span>#{id}</span>
            <h1>{pokeData.name}</h1>
            <dl>
              <dt>Peso</dt>
              <dd>{pokeData.weight}</dd>
              <dt>Altura</dt>
              <dd>{pokeData.height}</dd>
            </dl>
            <div>
              <section>
                <h2>Tipo</h2>
              </section>
              <section>
                <h2>Habilidades</h2>
              </section>
            </div>
            <div>
              <h2>Stats</h2>
            </div>
          </div>
        </div>
        <div className="Pokemon-movements">
          <h2>Movimientos</h2>
          <ul>
            {pokeData?.moves.map((move) => (
              <li key={move.move.name}>{move.move.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PokeItem;
