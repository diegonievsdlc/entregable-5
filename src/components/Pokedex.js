import React, { useEffect, useState } from "react";
import ornament from "../assets/Group 216 (2).png";
import logo from "../assets/image 11.png";
import { useSelector } from "react-redux";
import axios from "axios";
import PokemonCard from "./PokemonCard";

const Pokedex = () => {
  const name = useSelector((state) => state.name);
  const [types, setTypes] = useState([]);
  const [pokemons, setPokemons] = useState();
  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/type")
      .then((res) => setTypes(res.data.results));
    axios
      .get("https://pokeapi.co/api/v2/pokemon")
      .then((res) => setPokemons(res.data.results));
  }, []);
  return (
    <div className="Pokedex">
      <img className="ornament-pokedex" src={ornament} alt="Ornament" />
      <img className="logo-pokedex" src={logo} alt="Logo" />
      <div>
        <h2>
          <span>Bienvenido {name}</span>, aqui podras encontar tu pokemon
          preferido
        </h2>
        <div className="search">
          <div className="search-for-name">
            <input type="text" placeholder="Busca un pokemon" />
            <button>Buscar</button>
          </div>
          <select className="search-for-type">
            <option value="all-pokemons">Todos los pokemones</option>
            {types.map((type) => (
              <option key={type.name} value={types.indexOf(type) + 1}>
                {type.name} {types.indexOf(type) + 1}
              </option>
            ))}
          </select>
        </div>
      </div>
      <section className="main">
        {pokemons?.map((pokemon) => (
          <PokemonCard key={pokemon.url} link={pokemon.url} />
        ))}
      </section>
    </div>
  );
};

export default Pokedex;
