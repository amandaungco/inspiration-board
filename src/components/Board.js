import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

class Board extends Component {
  constructor() {
    super();

    const cards = CARD_DATA.cards.map((card, index) => {
      return <Card
        key={index}
        cardText={card.text}
        cardEmoji={card.emoji}
        />
    });

    this.state = {
      cards: cards
    };
  }
  render(){
    return (
      <div className="board">
        {this.state.cards}
      </div>
    )
  }

}






Board.propTypes = {

};

export default Board;
