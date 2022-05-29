import React, { useState } from "react";
import logo from "../assets/image 11.png";
import ornament from "../assets/Group 216 (1).png";
import { useDispatch } from "react-redux";
import { getName } from "../store/slices/name.slice";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const submit = (e) => {
    e.preventDefault();
    dispatch(getName(name));
    navigate("/pokedex");
  };
  return (
    <div className="Home">
      <div>
        <img src={logo} alt="Logo" />
        <h1>¡Hola entrenador!</h1>
        <h2>Para poder comenzar, dame tu nombre</h2>
        <form onSubmit={submit}>
          <input
            placeholder="Tu nombre..."
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <button className="btn"><span>COMENZAR</span><i></i></button>
        </form>
      </div>
      <img className="ornament-home" src={ornament} alt="Ornament" />
    </div>
  );
};

export default Home;
