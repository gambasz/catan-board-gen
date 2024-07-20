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
        <div className="view-container">
          <Board tiles={[]}/>
        </div>
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
