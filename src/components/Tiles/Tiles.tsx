import DesertTile from "./DesertTile"
import { PortType, PortTile } from "./PortTile"
import { TileType, TokenTile } from './TokenTile'
import WaterTile from "./WaterTile"

export type BoardTile = typeof DesertTile | typeof PortTile | typeof TokenTile | typeof WaterTile

export {
    DesertTile,
    PortTile,
    PortType,
    TileType,
    TokenTile,
    WaterTile,
}