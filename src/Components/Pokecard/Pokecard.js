import React from "react";
import "./Pokecard.css";

const Pokecard = props => {
  return (
    <div className="Pokecard">
      <h2>{props.name}</h2>
      <img src={props.image} alt={`Name: ${props.name}`} />
      <h4>
        <span style={{ fontWeight: "800" }}>TYPE:</span>{" "}
        <span style={{ textTransform: "capitalize" }}>{props.type}</span>
      </h4>
      <h4>
        <span style={{ fontWeight: "800" }}>EXP:</span> {props.base_exp}
      </h4>
    </div>
  );
};

export default Pokecard;
