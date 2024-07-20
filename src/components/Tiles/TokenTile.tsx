export type Token = 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
export enum TileType {
    BrickTile,
    OreTile,
    SheepTile,
    WheatTile,
    WoodTile
}

function getTileTypeCSS(tileType: TileType) {
    let tileTypeCSS = 'tile-error'
    switch (tileType) {
        case TileType.BrickTile:
            tileTypeCSS = 'tile-brick'
            break
        case TileType.OreTile:
            tileTypeCSS = 'tile-ore'
            break
        case TileType.SheepTile:
            tileTypeCSS = 'tile-sheep'
            break
        case TileType.WheatTile:
            tileTypeCSS = 'tile-wheat'
            break
        case TileType.WoodTile:
            tileTypeCSS = 'tile-wood'
            break
    }

    return tileTypeCSS
}

interface Props {
    tileType: TileType;
    token: Token;
}

const TokenTile : React.FC<Props> = ({ tileType, token } : Props) => {
    return ( 
        <div className={getTileTypeCSS(tileType)}>
            {token}
        </div>
    )
}

export default TokenTile;