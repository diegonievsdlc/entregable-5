import axios from "axios";
import ornament from "../assets/Group 216 (2).png";
import logo from "../assets/image 11.png";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const PokeItem = () => {
  const { id } = useParams();
  const [pokeData, setPokeData] = useState();
  const [colorCard, setColorCard] = useState({});
  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then((res) => setPokeData(res.data));
  }, [id]);
  useEffect(() => {
    if (pokeData?.species !== undefined) {
      axios.get(pokeData?.species.url).then((res) => setColorCard(res.data));
    }
  }, [pokeData]);
  return (
    <div className="Pokemon-item">
      <Link className="btn-out" to={-1}>
        <i className="bx bx-log-out-circle"></i>
      </Link>
      <img className="ornament-pokedex" src={ornament} alt="Ornament" />
      <img className="logo-pokedex" src={logo} alt="Logo" />
      <div>
        <div className="Pokemon-detail">
          <div
            style={{ background: colorCard.color?.name }}
            className="Pokemon-detail-ornament"
          >
            <img
              src={
                pokeData?.sprites.other.home.front_default ||
                pokeData?.sprites.front_default ||
                pokeData?.sprites.other["official-artwork"].front_default ||
                pokeData?.sprites.versions["generation-viii"].icons.front_default
              }
              alt="Pokemon"
            />
          </div>
          <div className="Pokemon-detail-info">
            <span>#{pokeData?.id}</span>
            <h1>{pokeData?.name}</h1>
            <ul>
              <li>
                <p>Peso</p>
                <span>{pokeData?.weight}</span>
              </li>
              <li>
                <p>Altura</p>
                <span>{pokeData?.height}</span>
              </li>
            </ul>
            <div className="type-and-skills">
              <section className="Pokemon-type">
                <h2>Tipo</h2>
                <div>
                  {pokeData?.types.map((type) => (
                    <div key={type.type.name}>{type.type.name}</div>
                  ))}
                </div>
              </section>
              <section className="Pokemon-skills">
                <h2>Habilidades</h2>
                <div>
                  {pokeData?.abilities.map((ability) => (
                    <div key={ability.ability.url}>{ability.ability.name}</div>
                  ))}
                </div>
              </section>
            </div>
            <div className="Pokemon-stats">
              <h2>Stats</h2>
              <ul>
                {pokeData?.stats.map((stat) => (
                  <li key={stat.stat.name}>
                    {stat.stat.name}
                    <br />
                    <progress
                      min="0"
                      max="150"
                      value={stat.base_stat}
                    ></progress>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="Pokemon-movements">
          <h2>Movimientos</h2>
          <ul>
            {
              pokeData?.moves !== undefined ? (
                <h2>{pokeData?.name} no tiene movimientos para mostrar</h2>
              ) : (
              pokeData?.moves.map((move) => (
                <li key={move.move.name}>{move.move.name}</li>
              )))
            }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PokeItem;
