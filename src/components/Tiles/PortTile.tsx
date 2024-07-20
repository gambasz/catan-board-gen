export enum PortType {
    AnyPort,
    BrickPort,
    OrePort,
    SheepPort,
    WheatPort,
    WoodPort
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

export const PortTile : React.FC<Props> = ({ port } : Props) => {
    return ( 
        <div className="tile color-port">
            {getPortTypeText(port)}
        </div>
    )
}

export default PortTile