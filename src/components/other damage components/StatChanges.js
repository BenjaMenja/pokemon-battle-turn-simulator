import {useState} from "react";
import StatChangeInput from "./StatChangeInput";
import {Button} from "reactstrap";

function StatChanges(props) {
    const [Attack, setAttack] = useState(0)
    const [Defense, setDefense] = useState(0)
    const [SpAtk, setSpAtk] = useState(0)
    const [SpDef, setSpDef] = useState(0)
    const [Speed, setSpeed] = useState(0)
    const [Accuracy, setAccuracy] = useState(0)
    const [Evasion, setEvasion] = useState(0)
    const [visibleChanges, setVisibleChanges] = useState(false)
    const toggle = () => setVisibleChanges((prevState) => !prevState)
    return (
        <>
            <Button onClick={toggle} color={'primary'}>Stat Changes</Button>
            {visibleChanges && <>
                <h3>Stat Changes</h3>
                <StatChangeInput stat={'attack'} inputvalue={Attack} setInputValue={setAttack} StatChanges={props.StatChanges}/>
                <StatChangeInput stat={'defense'} inputvalue={Defense} setInputValue={setDefense} StatChanges={props.StatChanges}/>
                <StatChangeInput stat={'spatk'} inputvalue={SpAtk} setInputValue={setSpAtk} StatChanges={props.StatChanges}/>
                <StatChangeInput stat={'spdef'} inputvalue={SpDef} setInputValue={setSpDef} StatChanges={props.StatChanges}/>
                <StatChangeInput stat={'speed'} inputvalue={Speed} setInputValue={setSpeed} StatChanges={props.StatChanges}/>
                <StatChangeInput stat={'accuracy'} inputvalue={Accuracy} setInputValue={setAccuracy} StatChanges={props.StatChanges}/>
                <StatChangeInput stat={'evasion'} inputvalue={Evasion} setInputValue={setEvasion} StatChanges={props.StatChanges}/>
            </>}
        </>
    )
}

export default StatChanges