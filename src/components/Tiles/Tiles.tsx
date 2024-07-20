import DesertTile from "./DesertTile"
import { PortType, PortTile } from "./PortTile"
import { TileType, Token, TokenTile } from './TokenTile'
import WaterTile from "./WaterTile"

export type BoardTile = typeof DesertTile | typeof PortTile | typeof TokenTile | typeof WaterTile

export {
    DesertTile,
    PortTile,
    type Token,
    PortType,
    TileType,
    TokenTile,
    WaterTile,
}