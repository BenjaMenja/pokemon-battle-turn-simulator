import StatChangeInput from "./StatChangeInput";

function StatChanges(props) {
    return (
        <>
            <h3>Stat Changes</h3>
            <StatChangeInput stat={'attack'} side={props.side}/>
            <StatChangeInput stat={'defense'} side={props.side}/>
            <StatChangeInput stat={'spatk'} side={props.side}/>
            <StatChangeInput stat={'spdef'} side={props.side}/>
            <StatChangeInput stat={'speed'} side={props.side}/>
            <StatChangeInput stat={'accuracy'} side={props.side}/>
            <StatChangeInput stat={'evasion'} side={props.side}/>
        </>
    )
}

export default StatChanges