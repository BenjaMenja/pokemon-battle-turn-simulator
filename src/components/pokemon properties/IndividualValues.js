import IndividualValueInput from "./IndividualValueInput";

function IndividualValues(props) {
    return(
        <>
            <h3>Individual Values</h3>
            <IndividualValueInput stat={'HP'} side={props.side}/>
            <IndividualValueInput stat={'attack'} side={props.side}/>
            <IndividualValueInput stat={'defense'} side={props.side}/>
            <IndividualValueInput stat={'spatk'} side={props.side}/>
            <IndividualValueInput stat={'spdef'} side={props.side}/>
            <IndividualValueInput stat={'speed'} side={props.side}/>
        </>
    )
}

export default IndividualValues