import {useState} from "react";
import StatChangeInput from "./StatChangeInput";

function StatChanges() {
    const [Attack, setAttack] = useState(0)
    const [Defense, setDefense] = useState(0)
    const [SpAtk, setSpAtk] = useState(0)
    const [SpDef, setSpDef] = useState(0)
    const [Speed, setSpeed] = useState(0)
    const [Accuracy, setAccuracy] = useState(0)
    const [Evasion, setEvasion] = useState(0)
    return (
        <>
            <h3>Stat Changes</h3>
            <StatChangeInput inputvalue={Attack} setInputValue={setAttack} />
            <StatChangeInput inputvalue={Defense} setInputValue={setDefense} />
            <StatChangeInput inputvalue={SpAtk} setInputValue={setSpAtk} />
            <StatChangeInput inputvalue={SpDef} setInputValue={setSpDef} />
            <StatChangeInput inputvalue={Speed} setInputValue={setSpeed} />
            <StatChangeInput inputvalue={Accuracy} setInputValue={setAccuracy} />
            <StatChangeInput inputvalue={Evasion} setInputValue={setEvasion} />
        </>
    )
}

export default StatChanges