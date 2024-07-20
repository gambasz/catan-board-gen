import React, { useState } from 'react';
import './App.css';
import { Board } from './components/Board'
import {DesertTile, PortTile, TokenTile, WaterTile, PortType, TileType } from './components/Tiles/Tiles'


const defaultBoardRow1 = [
  <PortTile port={PortType.AnyPort} />,
  <WaterTile />,
  <PortTile port={PortType.WheatPort} />,
  <WaterTile />
]

const defaultBoardRow2 = [
  <WaterTile />,
  <TokenTile tileType={TileType.OreTile} token={10}/>,
  <TokenTile tileType={TileType.SheepTile} token={2}/>,
  <TokenTile tileType={TileType.WoodTile} token={9}/>,
  <WaterTile />
]

const defaultBoardRow3 = [
  <PortTile port={PortType.WoodPort} />,
  <TokenTile tileType={TileType.WheatTile} token={12}/>,
  <TokenTile tileType={TileType.BrickTile} token={6}/>,
  <TokenTile tileType={TileType.SheepTile} token={4}/>,
  <TokenTile tileType={TileType.BrickTile} token={10}/>,
  <WaterTile />
]

const defaultBoardRow4 = [
  <WaterTile />,
  <TokenTile tileType={TileType.WheatTile} token={9}/>,
  <TokenTile tileType={TileType.WoodTile} token={11}/>,
  <DesertTile />,
  <TokenTile tileType={TileType.WoodTile} token={3}/>,
  <TokenTile tileType={TileType.OreTile} token={8}/>,
  <PortTile port={PortType.AnyPort} />
]

const defaultBoardRow5 = [
  <PortTile port={PortType.BrickPort} />,
  <TokenTile tileType={TileType.WoodTile} token={8}/>,
  <TokenTile tileType={TileType.OreTile} token={3}/>,
  <TokenTile tileType={TileType.WheatTile} token={4}/>,
  <TokenTile tileType={TileType.SheepTile} token={5}/>,
  <WaterTile />
]

const defaultBoardRow6 = [
  <WaterTile />,
  <TokenTile tileType={TileType.BrickTile} token={5}/>,
  <TokenTile tileType={TileType.WheatTile} token={6}/>,
  <TokenTile tileType={TileType.SheepTile} token={11}/>,
  <PortTile port={PortType.SheepPort} />
]

const defaultBoardRow7 = [
  <PortTile port={PortType.AnyPort} />,
  <WaterTile />,
  <PortTile port={PortType.AnyPort} />,
  <WaterTile />
] as any

const altRow7 = [
  <DesertTile />,
  <DesertTile />,
  <DesertTile />,
  <DesertTile />
] as any

function App() {
  const [board, setBoard] = useState([
    defaultBoardRow1,
    defaultBoardRow2,
    defaultBoardRow3,
    defaultBoardRow4,
    defaultBoardRow5,
    defaultBoardRow6,
    defaultBoardRow7
  ].flat())

  const handleClick = () => {
    setBoard([
      defaultBoardRow1,
      defaultBoardRow2,
      defaultBoardRow3,
      defaultBoardRow4,
      defaultBoardRow5,
      defaultBoardRow6,
      altRow7
    ].flat())
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
