import {useEffect} from "react";
import {Input, InputGroup} from "reactstrap";

function StatChangeInput(props) {
    const minChange = -6
    const maxChange = 6

    useEffect(() => {
        if (props.inputvalue > maxChange) {
            props.setInputValue(maxChange)
        }
        if (props.inputvalue < minChange) {
            props.setInputValue(minChange)
        }
        if (isNaN(props.inputvalue)) {
            props.setInputValue(0)
        }
    }, [props.inputvalue])
    return (
        <>
            <InputGroup>
                <Input style={{width: '60%', marginLeft: '20%', marginRight: '20%'}} type={"range"} min={'-6'} max={'6'} value={props.inputvalue} onInput={(e) => {
                    props.setInputValue(parseInt(e.currentTarget.value))
                    if (props.stat === 'attack') props.StatChanges.current.attack = parseInt(e.currentTarget.value)
                    else if (props.stat === 'defense') props.StatChanges.current.defense = parseInt(e.currentTarget.value)
                    else if (props.stat === 'spatk') props.StatChanges.current.spatk = parseInt(e.currentTarget.value)
                    else if (props.stat === 'spdef') props.StatChanges.current.spdef = parseInt(e.currentTarget.value)
                    else if (props.stat === 'speed') props.StatChanges.current.speed = parseInt(e.currentTarget.value)
                    else if (props.stat === 'accuracy') props.StatChanges.current.accuracy = parseInt(e.currentTarget.value)
                    else if (props.stat === 'evasion') props.StatChanges.current.evasion = parseInt(e.currentTarget.value)
                }}></Input>
                <Input style={{width: '60%', marginLeft: '20%', marginRight: '20%'}} type={'number'} min={'-6'} max={'6'} value={props.inputvalue} onChange={(e) => {
                    props.setInputValue(parseInt(e.currentTarget.value))
                    if (props.stat === 'attack') props.StatChanges.current.attack = parseInt(e.currentTarget.value)
                    else if (props.stat === 'defense') props.StatChanges.current.defense = parseInt(e.currentTarget.value)
                    else if (props.stat === 'spatk') props.StatChanges.current.spatk = parseInt(e.currentTarget.value)
                    else if (props.stat === 'spdef') props.StatChanges.current.spdef = parseInt(e.currentTarget.value)
                    else if (props.stat === 'speed') props.StatChanges.current.speed = parseInt(e.currentTarget.value)
                    else if (props.stat === 'accuracy') props.StatChanges.current.accuracy = parseInt(e.currentTarget.value)
                    else if (props.stat === 'evasion') props.StatChanges.current.evasion = parseInt(e.currentTarget.value)
                }} placeholder={'Attack'} />
            </InputGroup>
        </>
    )
}

export default StatChangeInput