import {useEffect} from "react";
import EffortValueInput from "./EffortValueInput";
import {useDispatch, useSelector} from "react-redux";
import {
    updateAttack,
    updateDefense,
    updateEVHP,
    updateSpatk,
    updateSpdef,
    updateSpeed
} from "../../features/stats/evSlice";

function EffortValues(props) {
    const maxEVs = 510
    const evSumLeft = useSelector((state) => state.evs.evSumLeft)
    const evSumRight = useSelector((state) => state.evs.evSumRight)
    const evsLeft = useSelector((state) => state.evs.EVsLeft)
    const evsRight = useSelector((state) => state.evs.EVsRight)
    const dispatch = useDispatch()

    useEffect(() => {
        if (evSumLeft > maxEVs) {
            dispatch(updateEVHP(evsLeft.HP - (evSumLeft - maxEVs)))
        }
        if (evSumRight > maxEVs) {
            dispatch(updateEVHP(evsRight.HP - (evSumRight - maxEVs)))
        }
    }, [evsLeft.HP, evsRight.HP])

    useEffect(() => {
        if (evSumLeft > maxEVs) {
            dispatch(updateAttack(evsLeft.attack - (evSumLeft - maxEVs)))
        }
        if (evSumRight > maxEVs) {
            dispatch(updateAttack(evsRight.attack - (evSumRight - maxEVs)))
        }
    }, [evsLeft.attack, evsRight.attack])

    useEffect(() => {
        if (evSumLeft > maxEVs) {
            dispatch(updateDefense(evsLeft.defense - (evSumLeft - maxEVs)))
        }
        if (evSumRight > maxEVs) {
            dispatch(updateDefense(evsRight.defense - (evSumRight - maxEVs)))
        }
    }, [evsLeft.defense, evsRight.defense])

    useEffect(() => {
        if (evSumLeft > maxEVs) {
            dispatch(updateSpatk(evsLeft.spatk - (evSumLeft - maxEVs)))
        }
        if (evSumRight > maxEVs) {
            dispatch(updateSpatk(evsRight.spatk - (evSumRight - maxEVs)))
        }
    }, [evsLeft.spatk, evsRight.spatk])

    useEffect(() => {
        if (evSumLeft > maxEVs) {
            dispatch(updateSpdef(evsLeft.spdef - (evSumLeft - maxEVs)))
        }
        if (evSumRight > maxEVs) {
            dispatch(updateSpdef(evsRight.spdef - (evSumRight - maxEVs)))
        }
    }, [evsLeft.spdef, evsRight.spdef])

    useEffect(() => {
        if (evSumLeft > maxEVs) {
            dispatch(updateSpeed(evsLeft.speed - (evSumLeft - maxEVs)))
        }
        if (evSumRight > maxEVs) {
            dispatch(updateSpeed(evsRight.speed - (evSumRight - maxEVs)))
        }
    }, [evsLeft.speed, evsRight.speed])

    return (
        <>
            <h3>Effort Values</h3>
            <EffortValueInput stat={'HP'} side={props.side} />
            <EffortValueInput stat={'attack'} side={props.side} />
            <EffortValueInput stat={'defense'} side={props.side} />
            <EffortValueInput stat={'spatk'} side={props.side} />
            <EffortValueInput stat={'spdef'} side={props.side} />
            <EffortValueInput stat={'speed'} side={props.side} />
        </>
    )
}

export default EffortValues