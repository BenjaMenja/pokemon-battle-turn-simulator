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
                <Input style={{width: '60%', marginLeft: '20%', marginRight: '20%'}} type={"range"} min={'-6'} max={'6'} value={props.inputvalue} onInput={(e) => {props.setInputValue(parseInt(e.currentTarget.value))}}></Input>
                <Input style={{width: '60%', marginLeft: '20%', marginRight: '20%'}} type={'number'} min={'-6'} max={'6'} value={props.inputvalue} onChange={(e) => {props.setInputValue(parseInt(e.currentTarget.value))}} placeholder={'Attack'} />
            </InputGroup>
        </>
    )
}

export default StatChangeInput