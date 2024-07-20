import React from 'react';
import './App.css';
import { Board } from './components/Board'
import WaterTile from './components/Tiles/WaterTile';

function App() {
  return (
    <div className="App">
      <div className="Title">
        <h1>Catan Board Generator!</h1>
      </div>
      <div className="Board">
        <Board tiles={Array(37).fill(<WaterTile />)}/>
      </div>
      <div className="Generation">
        Here goes the button
      </div>
      <div className="Footer">
        Made by me, blah bla.
      </div>
    </div>
  );
}

export default App;
