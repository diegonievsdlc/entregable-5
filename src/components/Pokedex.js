import React, { useEffect, useState } from "react";
import ornament from "../assets/Group 216 (2).png";
import logo from "../assets/image 11.png";
import axios from "axios";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import PokemonCard from "./PokemonCard";
import Pagination from "./Pagination";

const Pokedex = () => {
  const name = useSelector((state) => state.name);
  const item = useSelector((state) => state.item);
  const [types, setTypes] = useState([]);
  const [pokemons, setPokemons] = useState([]);
  const [pokeSearch, setPokeSearch] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/type")
      .then((res) => setTypes(res.data.results));
    axios
      .get("https://pokeapi.co/api/v2/pokemon")
      .then((res) => setPokemons(res.data.results));
  }, []);
  const search = () => {
    navigate(`/pokedex/${pokeSearch}`);
  };
  const filterPokemons = (e) => {
    if(e.target.value === 'all-pokemons'){
      axios
        .get("https://pokeapi.co/api/v2/pokemon")
        .then((res) => setPokemons(res.data.results));
    }else{
      axios.get(e.target.value).then((res) => setPokemons(res.data.pokemon));
    }
    setCurretPage(1);
  };
  //Pagination
  const [curretPage, setCurretPage] = useState(1);
  const [cardsPerPage] = useState(item);
  const indexOfLastCard = curretPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentPosts = pokemons.slice(indexOfFirstCard, indexOfLastCard);
  const paginate = (pageNumber) => {
    setCurretPage(pageNumber);
  };
  return (
    <div className="Pokedex">
      <Link className="btn-out" to={-1}>
        <i className="bx bx-log-out-circle"></i>
      </Link>
      <img className="ornament-pokedex" src={ornament} alt="Ornament" />
      <img className="logo-pokedex" src={logo} alt="Logo" />
      <div>
        <h2>
          <span>Bienvenido {name}</span>, aqui podras encontar tu pokemon
          preferido
        </h2>
        <div className="search">
          <div className="search-for-name">
            <input
              type="text"
              placeholder="Busca un pokemon"
              onChange={(e) => setPokeSearch(e.target.value)}
              value={pokeSearch}
            />
            <button className="btn" onClick={search}>
              <span>Buscar</span>
              <i></i>
            </button>
          </div>
          <select className="search-for-type" onChange={filterPokemons}>
            <option value="all-pokemons">Todos los pokemones</option>
            {types.map((type) => (
              <option key={type.name} value={type.url}>
                {type.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <section className="main">
        {currentPosts?.map((pokemon) => (
          <PokemonCard
            key={pokemon.url === undefined ? pokemon.pokemon.url : pokemon.url}
            link={pokemon.url === undefined ? pokemon.pokemon.url : pokemon.url}
          />
        ))}
      </section>
      <Pagination
        cardsPerPage={cardsPerPage}
        totalCards={pokemons.length}
        paginate={paginate}
      />
    </div>
  );
};

export default Pokedex;
