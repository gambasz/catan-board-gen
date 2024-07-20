import DesertTile from "./DesertTile"
import PortTile from "./PortTile"
import TokenTile from "./TokenTile"
import WaterTile from "./WaterTile"

export type BoardTile = typeof DesertTile | typeof PortTile | typeof TokenTile | typeof WaterTile

export {
    DesertTile,
    PortTile,
    TokenTile,
    WaterTile,
}