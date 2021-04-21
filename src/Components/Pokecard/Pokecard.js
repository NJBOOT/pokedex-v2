import React from "react";
import "./Pokecard.css";

const Pokecard = props => {
  return (
    <div className="Pokecard">
      <h2>{props.name}</h2>
      <img src={props.image} alt={`Name: ${props.name}`} />
      <h3>Exp: {props.base_exp}</h3>
    </div>
  );
};

export default Pokecard;
