import {Col, Input, InputGroup, Row} from "reactstrap";
import {updateIVHP, updateAttack, updateDefense, updateSpatk, updateSpdef, updateSpeed, updateSide} from "../../features/stats/ivSlice";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

function IndividualValueInput(props) {
    const maxSingleIV = 31
    const side = useSelector((state) => state.ivs.side)
    const dispatch = useDispatch()
    const [inputValue, setInputValue] = useState(0)

    useEffect(() => {
        if (inputValue > maxSingleIV) {
            setInputValue(maxSingleIV)
            if (props.side !== side) {
                dispatch(updateSide(props.side))
            }
            if (props.stat === 'HP') dispatch(updateIVHP(maxSingleIV))
            else if (props.stat === 'attack') dispatch(updateAttack(maxSingleIV))
            else if (props.stat === 'defense') dispatch(updateDefense(maxSingleIV))
            else if (props.stat === 'spatk') dispatch(updateSpatk(maxSingleIV))
            else if (props.stat === 'spdef') dispatch(updateSpdef(maxSingleIV))
            else if (props.stat === 'speed') dispatch(updateSpeed(maxSingleIV))
        }
        if (isNaN(inputValue)) {
            setInputValue(0)
            if (props.side !== side) {
                dispatch(updateSide(props.side))
            }
            if (props.stat === 'HP') dispatch(updateIVHP(0))
            else if (props.stat === 'attack') dispatch(updateAttack(0))
            else if (props.stat === 'defense') dispatch(updateDefense(0))
            else if (props.stat === 'spatk') dispatch(updateSpatk(0))
            else if (props.stat === 'spdef') dispatch(updateSpdef(0))
            else if (props.stat === 'speed') dispatch(updateSpeed(0))
        }
    }, [inputValue])
    return (
        <>
            <Row xs='3'>
                <Col>
                    <h4>{props.stat[0].toUpperCase() + props.stat.substring(1)}</h4>
                </Col>
                <Col>
                    <div className={'d-flex justify-content-center'}>
                        <InputGroup>
                            <Input type={"range"} min={'0'} max={'31'} value={inputValue} onInput={(e) => {
                                setInputValue(parseInt(e.currentTarget.value))
                                if (props.side !== side) {
                                    dispatch(updateSide(props.side))
                                }
                                if (props.stat === 'HP') dispatch(updateIVHP(parseInt(e.currentTarget.value)))
                                else if (props.stat === 'attack') dispatch(updateAttack(parseInt(e.currentTarget.value)))
                                else if (props.stat === 'defense') dispatch(updateDefense(parseInt(e.currentTarget.value)))
                                else if (props.stat === 'spatk') dispatch(updateSpatk(parseInt(e.currentTarget.value)))
                                else if (props.stat === 'spdef') dispatch(updateSpdef(parseInt(e.currentTarget.value)))
                                else if (props.stat === 'speed') dispatch(updateSpeed(parseInt(e.currentTarget.value)))
                            }}></Input>
                            <Input type={'number'} min={'0'} max={'31'} value={inputValue} onChange={(e) => {
                                setInputValue(parseInt(e.currentTarget.value))
                                if (props.side !== side) {
                                    dispatch(updateSide(props.side))
                                }
                                if (props.stat === 'HP') dispatch(updateIVHP(parseInt(e.currentTarget.value)))
                                else if (props.stat === 'attack') dispatch(updateAttack(parseInt(e.currentTarget.value)))
                                else if (props.stat === 'defense') dispatch(updateDefense(parseInt(e.currentTarget.value)))
                                else if (props.stat === 'spatk') dispatch(updateSpatk(parseInt(e.currentTarget.value)))
                                else if (props.stat === 'spdef') dispatch(updateSpdef(parseInt(e.currentTarget.value)))
                                else if (props.stat === 'speed') dispatch(updateSpeed(parseInt(e.currentTarget.value)))
                            }} placeholder={'HP'} />
                        </InputGroup>
                    </div>
                </Col>
            </Row>

        </>
    )
}

export default IndividualValueInput