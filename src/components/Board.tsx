import { Row } from './Row'
import { BoardTile } from './Tiles/Tiles'

interface Props {
    tiles: BoardTile[];
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