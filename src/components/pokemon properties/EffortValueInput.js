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
                <Input type={"range"} min={'0'} max={'252'} value={props.inputvalue} onInput={(e) => {props.setInputValue(parseInt(e.currentTarget.value))}}></Input>
                <Input type={'number'} min={'0'} max={'252'} value={props.inputvalue} onChange={(e) => {props.setInputValue(parseInt(e.currentTarget.value))}} placeholder={'HP'} />
            </InputGroup>
        </>
    )
}

export default EffortValueInput