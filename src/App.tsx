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
        <h1>Catan Board Generator!</h1>
      </div>
      <div className="Board">
        <div className="view-container">
          <Board tiles={board}/>
        </div>
      </div>
      <div className="Generation">
        <button type="button" onClick={handleClick}>
          Click Me
        </button>
      </div>
      <div className="Footer">
        Made by me, blah bla.
      </div>
    </div>
  );
}

export default App;
