import {useEffect, useState} from "react";
import EffortValueInput from "./EffortValueInput";

function EffortValues(props) {
    const maxEVs = 510
    const [HP, setHP] = useState(0)
    const [Attack, setAttack] = useState(0)
    const [Defense, setDefense] = useState(0)
    const [SpAtk, setSpAtk] = useState(0)
    const [SpDef, setSpDef] = useState(0)
    const [Speed, setSpeed] = useState(0)

    const statSum = () => {return HP + Attack + Defense + SpAtk + SpDef + Speed}

    useEffect(() => {
        if (statSum() > maxEVs) {
            setHP(HP - (statSum() - maxEVs))
            props.EVs.current.HP = HP - (statSum() - maxEVs)
        }
    }, [HP])

    useEffect(() => {
        if (statSum() > maxEVs) {
            setAttack(Attack - (statSum() - maxEVs))
            props.EVs.current.attack = Attack - (statSum() - maxEVs)
        }
    }, [Attack])

    useEffect(() => {
        if (statSum() > maxEVs) {
            setDefense(Defense - (statSum() - maxEVs))
            props.EVs.current.defense = Defense - (statSum() - maxEVs)
        }
    }, [Defense])

    useEffect(() => {
        if (statSum() > maxEVs) {
            setSpAtk(SpAtk - (statSum() - maxEVs))
            props.EVs.current.spatk = SpAtk - (statSum() - maxEVs)
        }
    }, [SpAtk])

    useEffect(() => {
        if (statSum() > maxEVs) {
            setSpDef(SpDef - (statSum() - maxEVs))
            props.EVs.current.spdef = SpDef - (statSum() - maxEVs)
        }
    }, [SpDef])

    useEffect(() => {
        if (statSum() > maxEVs) {
            setSpeed(Speed - (statSum() - maxEVs))
            props.EVs.current.speed = Speed - (statSum() - maxEVs)
        }
    }, [Speed])

    return (
        <>
            <h3>Effort Values</h3>
            <EffortValueInput stat={'HP'} inputvalue={HP} setInputValue={setHP} EVs={props.EVs}/>
            <EffortValueInput stat={'attack'} inputvalue={Attack} setInputValue={setAttack} EVs={props.EVs}/>
            <EffortValueInput stat={'defense'} inputvalue={Defense} setInputValue={setDefense} EVs={props.EVs}/>
            <EffortValueInput stat={'spatk'} inputvalue={SpAtk} setInputValue={setSpAtk} EVs={props.EVs}/>
            <EffortValueInput stat={'spdef'} inputvalue={SpDef} setInputValue={setSpDef} EVs={props.EVs}/>
            <EffortValueInput stat={'speed'} inputvalue={Speed} setInputValue={setSpeed} EVs={props.EVs}/>
        </>
    )
}

export default EffortValues