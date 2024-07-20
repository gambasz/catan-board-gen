interface Props {
    rowNumber: string;
    row: any[];
}

export const Row : React.FC<Props> = ({ rowNumber, row } : Props) => {
    return (
        <div id={rowNumber} className={"four-player-row-" + rowNumber}>
            {row}
        </div>
    )
}

export default Row