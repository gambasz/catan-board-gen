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
            tileTypeCSS = 'tile color-brick'
            break
        case TileType.OreTile:
            tileTypeCSS = 'tile color-ore'
            break
        case TileType.SheepTile:
            tileTypeCSS = 'tile color-sheep'
            break
        case TileType.WheatTile:
            tileTypeCSS = 'tile color-wheat'
            break
        case TileType.WoodTile:
            tileTypeCSS = 'tile color-wood'
            break
        default:
            console.log(`Got a weird tileType: ${tileType}`)
    }

    return tileTypeCSS
}

interface Props {
    tileType: TileType;
    token: Token;
}

export const TokenTile : React.FC<Props> = ({ tileType, token } : Props) => {
    return ( 
        <div className={getTileTypeCSS(tileType)}>
            <div className={(token === 6 || token === 8) ? "text-color-white" : "text-color-black"}>
                {token}
            </div>
        </div>
    )
}

export default TokenTile;