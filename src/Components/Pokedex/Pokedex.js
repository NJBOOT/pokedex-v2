import React from "react";
import "./Pokedex.css";
import Pokecard from "../Pokecard/Pokecard";
function Pokedex(props) {
  const { hand, exp, isWinner } = props;
  const padNumber = number =>
    number <= 999 ? `00${number}`.slice(-3) : number;
  let message;
  let classList = ["Poxedex-header"];

  if (isWinner) {
    classList.push("winner");
    message = "YOU WON!";
  } else {
    classList.push("loser");
    message = "YOU LOST!";
  }

  return (
    <div className="Pokedex">
      <div className={classList.join(" ")}>
        <h1>Total Exp: {exp}</h1>
        <h1>{message}</h1>
      </div>
      <div className="Poxedex-cards">
        {hand.map(card => (
          <Pokecard
            key={card.id}
            name={card.name}
            type={card.type}
            image={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${padNumber(
              card.id
            )}.png`}
            base_exp={card.base_experience}
          />
        ))}
      </div>
    </div>
  );
}

export default Pokedex;
