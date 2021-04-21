import React, { Component } from "react";
import "./Pokegame.css";
import Pokedex from "../Pokedex/Pokedex";

class Pokegame extends Component {
  state = {
    handOne: [],
    handTwo: [],
    handOneExp: 0,
    handTwoExp: 0,
  };

  shuffleArray = a => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

  totalExp = a => a.reduce((acc, el) => el.base_experience + acc, 0);

  initializeGame = () => {
    const cards = [...this.props.data];
    const shuffled = this.shuffleArray(cards);
    const firstShuffle = shuffled.slice(0, 4);
    const secondShuffle = shuffled.slice(4);
    const firstShuffleExp = this.totalExp(firstShuffle);
    const secondShuffleExp = this.totalExp(secondShuffle);

    this.setState({
      handOne: firstShuffle,
      handTwo: secondShuffle,
      handOneExp: firstShuffleExp,
      handTwoExp: secondShuffleExp,
    });
  };

  componentDidMount() {
    this.initializeGame();
  }

  render() {
    return (
      <div className="Pokegame">
        <Pokedex
          hand={this.state.handOne}
          exp={this.state.handOneExp}
          isWinner={this.state.handOneExp > this.state.handTwoExp}
        />
        <Pokedex
          hand={this.state.handTwo}
          exp={this.state.handTwoExp}
          isWinner={this.state.handOneExp < this.state.handTwoExp}
        />
      </div>
    );
  }
}

export default Pokegame;
