import {useEffect, useState} from "react";
import {Col, Input, InputGroup, Row} from "reactstrap";
import {useDispatch} from "react-redux";
import {updateAttack, updateDefense, updateSpatk, updateSpdef, updateSpeed, updateAccuracy, updateEvasion, updateSide} from "../../features/stats/statChangeSlice";

function StatChangeInput(props) {
    const minChange = -6
    const maxChange = 6
    const dispatch = useDispatch()
    const [inputValue, setInputValue] = useState(0)

    useEffect(() => {
        if (inputValue > maxChange) {
            setInputValue(maxChange)
            dispatch(updateSide(props.side))
            if (props.stat === 'attack') dispatch(updateAttack(maxChange))
            else if (props.stat === 'defense') dispatch(updateDefense(maxChange))
            else if (props.stat === 'spatk') dispatch(updateSpatk(maxChange))
            else if (props.stat === 'spdef') dispatch(updateSpdef(maxChange))
            else if (props.stat === 'speed') dispatch(updateSpeed(maxChange))
            else if (props.stat === 'accuracy') dispatch(updateAccuracy(maxChange))
            else if (props.stat === 'evasion') dispatch(updateEvasion(maxChange))
        }
        if (inputValue < minChange) {
            setInputValue(minChange)
            dispatch(updateSide(props.side))
            if (props.stat === 'attack') dispatch(updateAttack(minChange))
            else if (props.stat === 'defense') dispatch(updateDefense(minChange))
            else if (props.stat === 'spatk') dispatch(updateSpatk(minChange))
            else if (props.stat === 'spdef') dispatch(updateSpdef(minChange))
            else if (props.stat === 'speed') dispatch(updateSpeed(minChange))
            else if (props.stat === 'accuracy') dispatch(updateAccuracy(minChange))
            else if (props.stat === 'evasion') dispatch(updateEvasion(minChange))
        }
        if (isNaN(inputValue)) {
            setInputValue(0)
            dispatch(updateSide(props.side))
            if (props.stat === 'attack') dispatch(updateAttack(0))
            else if (props.stat === 'defense') dispatch(updateDefense(0))
            else if (props.stat === 'spatk') dispatch(updateSpatk(0))
            else if (props.stat === 'spdef') dispatch(updateSpdef(0))
            else if (props.stat === 'speed') dispatch(updateSpeed(0))
            else if (props.stat === 'accuracy') dispatch(updateAccuracy(0))
            else if (props.stat === 'evasion') dispatch(updateEvasion(0))
        }
    }, [inputValue])
    return (
        <>
            <Row xs={'3'}>
                <Col>
                    <h4>{props.stat[0].toUpperCase() + props.stat.substring(1)}</h4>
                </Col>
                <Col>
                    <div className={'d-flex justify-content-center'}>
                        <InputGroup>
                            <Input type={"range"} min={'-6'} max={'6'} value={inputValue} onInput={(e) => {
                                setInputValue(parseInt(e.currentTarget.value))
                                dispatch(updateSide(props.side))
                                if (props.stat === 'attack') dispatch(updateAttack(parseInt(e.currentTarget.value)))
                                else if (props.stat === 'defense') dispatch(updateDefense(parseInt(e.currentTarget.value)))
                                else if (props.stat === 'spatk') dispatch(updateSpatk(parseInt(e.currentTarget.value)))
                                else if (props.stat === 'spdef') dispatch(updateSpdef(parseInt(e.currentTarget.value)))
                                else if (props.stat === 'speed') dispatch(updateSpeed(parseInt(e.currentTarget.value)))
                                else if (props.stat === 'accuracy') dispatch(updateAccuracy(parseInt(e.currentTarget.value)))
                                else if (props.stat === 'evasion') dispatch(updateEvasion(parseInt(e.currentTarget.value)))
                            }}></Input>
                            <Input type={'number'} min={'-6'} max={'6'} value={inputValue} onChange={(e) => {
                                setInputValue(parseInt(e.currentTarget.value))
                                dispatch(updateSide(props.side))
                                if (props.stat === 'attack') dispatch(updateAttack(parseInt(e.currentTarget.value)))
                                else if (props.stat === 'defense') dispatch(updateDefense(parseInt(e.currentTarget.value)))
                                else if (props.stat === 'spatk') dispatch(updateSpatk(parseInt(e.currentTarget.value)))
                                else if (props.stat === 'spdef') dispatch(updateSpdef(parseInt(e.currentTarget.value)))
                                else if (props.stat === 'speed') dispatch(updateSpeed(parseInt(e.currentTarget.value)))
                                else if (props.stat === 'accuracy') dispatch(updateAccuracy(parseInt(e.currentTarget.value)))
                                else if (props.stat === 'evasion') dispatch(updateEvasion(parseInt(e.currentTarget.value)))
                            }} placeholder={'Attack'} />
                        </InputGroup>
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default StatChangeInput