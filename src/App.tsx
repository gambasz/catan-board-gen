import React, { useState } from 'react';
import './App.css';
import { Board, generateRandomBoard } from './components/Board'

function App() {
  const [board, setBoard] = useState(generateRandomBoard())

  const handleClick = () => {
    setBoard(generateRandomBoard())
  }

  return (
    <div className="App">
      <div className="Title">
        <h1>Catan Board Generator</h1>
      </div>
      <div className="Board">
        <div className="view-container">
          <Board tiles={board}/>
        </div>
      </div>
      <div className="Generation">
        <button type="button" className="generate-button" role="button" onClick={handleClick}>
          New Board
        </button>
      </div>
      <div className="Footer">
        <p>
          Made by <a href="https://github.com/gambasz">Guido Ambasz</a>
        </p>
        <p>
          You can find the source code for it on <a href="https://github.com/gambasz/catan-board-gen">Github</a>
        </p>
      </div>
    </div>
  );
}

export default App;
