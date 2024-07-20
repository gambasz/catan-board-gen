import { Row } from './Row'
import {BoardTile, DesertTile, PortTile, PortType as PT, TileType as TT, Token, TokenTile, WaterTile} from './Tiles/Tiles'

interface Props {
    tiles: BoardTile[];
}

export function generateRandomBoard() {
    let allTiles = [
        TT.BrickTile, TT.BrickTile, TT.BrickTile,
        'Desert', TT.OreTile, TT.OreTile, TT.OreTile, 
        TT.SheepTile, TT.SheepTile, TT.SheepTile, TT.SheepTile, TT.WheatTile,
        TT.WheatTile, TT.WheatTile, TT.WheatTile, TT.WoodTile,
        TT.WoodTile, TT.WoodTile, TT.WoodTile,
    ]

    let allTokens = [
        2,3,3,
        4,4,5,5,
        6,6,8,8,9,
        9,10,10,
        11,11,12
    ]

    let allPorts = [
        PT.AnyPort, PT.WheatPort, PT.OrePort,
        PT.WoodPort, PT.AnyPort, PT.BrickPort,
        PT.SheepPort, PT.AnyPort, PT.AnyPort

    ]

    const portPositions = new Set([0,2,8,9,21,22,32,33,35])
    const tilePositions = new Set([5,6,7,10,11,12,13,16,17,18,19,20,23,24,25,26,29,30,31])

    function shuffle(lst: any[]) {
        for (let i = lst.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1))
            let tmp = lst[i]
            lst[i] = lst[j]
            lst[j] = tmp
        }
    }

    function validTokens(lst: number[]) {
        for (let i = 0; i < lst.length - 1; i++) {
            let curr = lst[i]
            let next = lst[i+1]

            if ((curr === 6 && next === 6) || (curr === 6 && next === 8) || (curr === 8 && next === 6) || (curr === 8 && next === 8)) {
                return false
            }
        }

        return true
    }

    shuffle(allTiles)
    
    while (!validTokens(allTokens)) {
        shuffle(allTokens)
    }

    // Generating the Board
    let portI = 0
    let tileI = 0
    let tokenI = 0
    let board = Array(37)

    for (let i = 0; i < board.length; i++) {
        if (portPositions.has(i)) {
            board[i] = <PortTile port={allPorts[portI]}/>
            portI++
        } else if (tilePositions.has(i)) {
            if (allTiles[tileI] === 'Desert') {
                board[i] = <DesertTile />
                tileI++
            } else {
                board[i] = <TokenTile tileType={allTiles[tileI] as TT} token={allTokens[tokenI] as Token}/>
                tileI++
                tokenI++
            }
        } else {
            board[i] = <WaterTile />
        }
    }

    return board;
}

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
            <Row rowNumber='1' row={row1} />
            <Row rowNumber='2' row={row2} />
            <Row rowNumber='3' row={row3} />
            <Row rowNumber='4' row={row4} />
            <Row rowNumber='5' row={row5} />
            <Row rowNumber='6' row={row6} />
            <Row rowNumber='7' row={row7} />
        </div>
    )
}

export default Board