import { Row } from './Row'
import {BoardTile, DesertTile, PortTile, PortType, TileType, TokenTile, WaterTile} from './Tiles/Tiles'

interface Props {
    tiles: BoardTile[];
}

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
]

export const Board : React.FC<Props> = ({ tiles } : Props) => {
    let row1 = tiles.slice(0, 4)
    let row2 = tiles.slice(4, 9)
    let row3 = tiles.slice(9, 15)
    let row4 = tiles.slice(15, 22)
    let row5 = tiles.slice(22, 28)
    let row6 = tiles.slice(28, 33)
    let row7 = tiles.slice(33)

    return (
        <div className="tile-container">
            <Row rowNumber='1' row={defaultBoardRow1} />
            <Row rowNumber='2' row={defaultBoardRow2} />
            <Row rowNumber='3' row={defaultBoardRow3} />
            <Row rowNumber='4' row={defaultBoardRow4} />
            <Row rowNumber='5' row={defaultBoardRow5} />
            <Row rowNumber='6' row={defaultBoardRow6} />
            <Row rowNumber='7' row={defaultBoardRow7} />
        </div>
    )
}

export default Board