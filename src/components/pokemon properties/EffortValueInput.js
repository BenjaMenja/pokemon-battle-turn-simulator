import {Input, InputGroup} from "reactstrap";
import {useEffect} from "react";

function EffortValueInput(props) {
    const maxSingleEV = 252

    useEffect(() => {
        if (props.inputvalue > maxSingleEV) {
            props.setInputValue(maxSingleEV)
        }
        if (isNaN(props.inputvalue)) {
            props.setInputValue(0)
        }
    }, [props.inputvalue])

    return(
        <>
            <InputGroup>
                <Input type={"range"} min={'0'} max={'252'} value={props.inputvalue} onInput={(e) => {
                    props.setInputValue(parseInt(e.currentTarget.value))
                    if (props.stat === 'HP') props.EVs.HP = parseInt(e.currentTarget.value)
                    else if (props.stat === 'attack') props.EVs.attack = parseInt(e.currentTarget.value)
                    else if (props.stat === 'defense') props.EVs.defense = parseInt(e.currentTarget.value)
                    else if (props.stat === 'spatk') props.EVs.spatk = parseInt(e.currentTarget.value)
                    else if (props.stat === 'spdef') props.EVs.spdef = parseInt(e.currentTarget.value)
                    else if (props.stat === 'speed') props.EVs.speed = parseInt(e.currentTarget.value)
                }}></Input>
                <Input type={'number'} min={'0'} max={'252'} value={props.inputvalue} onChange={(e) => {
                    props.setInputValue(parseInt(e.currentTarget.value))
                    if (props.stat === 'HP') props.EVs.HP = parseInt(e.currentTarget.value)
                    else if (props.stat === 'attack') props.EVs.attack = parseInt(e.currentTarget.value)
                    else if (props.stat === 'defense') props.EVs.defense = parseInt(e.currentTarget.value)
                    else if (props.stat === 'spatk') props.EVs.spatk = parseInt(e.currentTarget.value)
                    else if (props.stat === 'spdef') props.EVs.spdef = parseInt(e.currentTarget.value)
                    else if (props.stat === 'speed') props.EVs.speed = parseInt(e.currentTarget.value)
                }} placeholder={'HP'} />
            </InputGroup>
        </>
    )
}

export default EffortValueInput