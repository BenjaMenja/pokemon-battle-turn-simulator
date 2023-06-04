import {useEffect, useState} from "react";
import EffortValueInput from "./EffortValueInput";

function EffortValues() {
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
        }
    }, [HP])

    useEffect(() => {
        if (statSum() > maxEVs) {
            setAttack(Attack - (statSum() - maxEVs))
        }
    }, [Attack])

    useEffect(() => {
        if (statSum() > maxEVs) {
            setDefense(Defense - (statSum() - maxEVs))
        }
    }, [Defense])

    useEffect(() => {
        if (statSum() > maxEVs) {
            setSpAtk(SpAtk - (statSum() - maxEVs))
        }
    }, [SpAtk])

    useEffect(() => {
        if (statSum() > maxEVs) {
            setSpDef(SpDef - (statSum() - maxEVs))
        }
    }, [SpDef])

    useEffect(() => {
        if (statSum() > maxEVs) {
            setSpeed(Speed - (statSum() - maxEVs))
        }
    }, [Speed])

    return (
        <>
            <h3>Effort Values</h3>
            <EffortValueInput inputvalue={HP} setInputValue={setHP} />
            <EffortValueInput inputvalue={Attack} setInputValue={setAttack} />
            <EffortValueInput inputvalue={Defense} setInputValue={setDefense} />
            <EffortValueInput inputvalue={SpAtk} setInputValue={setSpAtk} />
            <EffortValueInput inputvalue={SpDef} setInputValue={setSpDef} />
            <EffortValueInput inputvalue={Speed} setInputValue={setSpeed} />
        </>
    )
}

export default EffortValues