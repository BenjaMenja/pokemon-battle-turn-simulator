import {Input, InputGroup} from "reactstrap";
import {useEffect} from "react";

function IndividualValueInput(props) {
    const maxSingleIV = 31

    useEffect(() => {
        if (props.inputvalue > maxSingleIV) {
            props.setInputValue(maxSingleIV)
        }
        if (isNaN(props.inputvalue)) {
            props.setInputValue(0)
        }
    }, [props.inputvalue])
    return (
        <>
            <InputGroup>
                <Input type={"range"} min={'0'} max={'31'} value={props.inputvalue} onInput={(e) => {
                    props.setInputValue(parseInt(e.currentTarget.value))
                    if (props.stat === 'HP') props.IVs.HP = parseInt(e.currentTarget.value)
                    else if (props.stat === 'attack') props.IVs.attack = parseInt(e.currentTarget.value)
                    else if (props.stat === 'defense') props.IVs.defense = parseInt(e.currentTarget.value)
                    else if (props.stat === 'spatk') props.IVs.spatk = parseInt(e.currentTarget.value)
                    else if (props.stat === 'spdef') props.IVs.spdef = parseInt(e.currentTarget.value)
                    else if (props.stat === 'speed') props.IVs.speed = parseInt(e.currentTarget.value)
                }}></Input>
                <Input type={'number'} min={'0'} max={'31'} value={props.inputvalue} onChange={(e) => {
                    props.setInputValue(parseInt(e.currentTarget.value))
                    if (props.stat === 'HP') props.IVs.HP = parseInt(e.currentTarget.value)
                    else if (props.stat === 'attack') props.IVs.attack = parseInt(e.currentTarget.value)
                    else if (props.stat === 'defense') props.IVs.defense = parseInt(e.currentTarget.value)
                    else if (props.stat === 'spatk') props.IVs.spatk = parseInt(e.currentTarget.value)
                    else if (props.stat === 'spdef') props.IVs.spdef = parseInt(e.currentTarget.value)
                    else if (props.stat === 'speed') props.IVs.speed = parseInt(e.currentTarget.value)
                }} placeholder={'HP'} />
            </InputGroup>
        </>
    )
}

export default IndividualValueInput