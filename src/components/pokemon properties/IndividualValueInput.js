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
                <Input type={"range"} min={'0'} max={'31'} value={props.inputvalue} onInput={(e) => {props.setInputValue(parseInt(e.currentTarget.value))}}></Input>
                <Input type={'number'} min={'0'} max={'31'} value={props.inputvalue} onChange={(e) => {props.setInputValue(parseInt(e.currentTarget.value))}} placeholder={'HP'} />
            </InputGroup>
        </>
    )
}

export default IndividualValueInput