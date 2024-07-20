export enum PortType {
    AnyPort,
    BrickPort,
    OrePort,
    SheepPort,
    WheatPort,
    WoodPort
}

function getPortTypeCSS(portType: PortType) {
    let portTypeCSS = 'tile-port-error'
    switch(portType) {
        case PortType.AnyPort:
            portTypeCSS = "tile-port-any"
            break
        case PortType.BrickPort:
            portTypeCSS = "tile-port-brick"
            break
        case PortType.OrePort:
            portTypeCSS = "tile-port-ore"
            break
        case PortType.SheepPort:
            portTypeCSS = "tile-port-sheep"
            break
        case PortType.WheatPort:
            portTypeCSS = "tile-port-wheat"
            break
        case PortType.WoodPort:
            portTypeCSS = "tile-port-wood"
            break
        default:
            break
    }

    return portTypeCSS
}

function getPortTypeText(portType: PortType) {
    let portTypeText = ''
    switch(portType) {
        case PortType.AnyPort:
            portTypeText = "❓"
            break
        case PortType.BrickPort:
            portTypeText = "🧱"
            break
        case PortType.OrePort:
            portTypeText = "🪨"
            break
        case PortType.SheepPort:
            portTypeText = "🐑"
            break
        case PortType.WheatPort:
            portTypeText = "🍞"
            break
        case PortType.WoodPort:
            portTypeText = "🌲"
            break
        default:
            break
    }

    return portTypeText
}

interface Props {
    port: PortType
}

const PortTile : React.FC<Props> = ({ port } : Props) => {
    return ( 
        <div className={getPortTypeCSS(port)}>
            {getPortTypeText(port)}
        </div>
    )
}

export default PortTile