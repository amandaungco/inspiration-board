import React, { Component } from 'react';
import './App.css';
import Board from './components/Board';
// import axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      cardData: [],
    };
  }

  render() {
    return (
      <section>
        <header className="header">
          <h1 className="header__h1"><span className="header__text">Inspiration Board</span></h1>
        </header>
        <Board
          url="https://inspiration-board.herokuapp.com/boards/"
          boardName={`Amanda-Lovelace`}
          cardData={this.state.cardData}
          />
      </section>
    );
  }
}

export default App;
