import {useState} from "react";
import IndividualValueInput from "./IndividualValueInput";

function IndividualValues(props) {
    const [HP, setHP] = useState(0)
    const [Attack, setAttack] = useState(0)
    const [Defense, setDefense] = useState(0)
    const [SpAtk, setSpAtk] = useState(0)
    const [SpDef, setSpDef] = useState(0)
    const [Speed, setSpeed] = useState(0)

    return(
        <>
            <h3>Individual Values</h3>
            <IndividualValueInput stat={'HP'} inputvalue={HP} setInputValue={setHP} IVs={props.IVs}/>
            <IndividualValueInput stat={'attack'} inputvalue={Attack} setInputValue={setAttack} IVs={props.IVs}/>
            <IndividualValueInput stat={'defense'} inputvalue={Defense} setInputValue={setDefense} IVs={props.IVs}/>
            <IndividualValueInput stat={'spatk'} inputvalue={SpAtk} setInputValue={setSpAtk} IVs={props.IVs}/>
            <IndividualValueInput stat={'spdef'} inputvalue={SpDef} setInputValue={setSpDef} IVs={props.IVs}/>
            <IndividualValueInput stat={'speed'} inputvalue={Speed} setInputValue={setSpeed} IVs={props.IVs}/>
        </>
    )
}

export default IndividualValues