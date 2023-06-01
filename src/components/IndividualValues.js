import {useState} from "react";
import IndividualValueInput from "./IndividualValueInput";

function IndividualValues() {
    const [HP, setHP] = useState(0)
    const [Attack, setAttack] = useState(0)
    const [Defense, setDefense] = useState(0)
    const [SpAtk, setSpAtk] = useState(0)
    const [SpDef, setSpDef] = useState(0)
    const [Speed, setSpeed] = useState(0)

    return(
        <>
            <h3>Individual Values</h3>
            <IndividualValueInput inputvalue={HP} setInputValue={setHP} />
            <IndividualValueInput inputvalue={Attack} setInputValue={setAttack} />
            <IndividualValueInput inputvalue={Defense} setInputValue={setDefense} />
            <IndividualValueInput inputvalue={SpAtk} setInputValue={setSpAtk} />
            <IndividualValueInput inputvalue={SpDef} setInputValue={setSpDef} />
            <IndividualValueInput inputvalue={Speed} setInputValue={setSpeed} />
        </>
    )
}

export default IndividualValues