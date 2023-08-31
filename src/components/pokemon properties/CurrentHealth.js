import {Col, Input, InputGroup, Row} from "reactstrap";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectMaxHPLeft, selectMaxHPRight, updateHP, updateSide} from "../../features/pokemon_field/pokemonSlice";

function CurrentHealth(props) {

    const [curHP, setCurHP] = useState(0)
    const maxHPLeft = useSelector(selectMaxHPLeft)
    const maxHPRight = useSelector(selectMaxHPRight)
    const side = useSelector((state) => state.pokemon.side)
    const dispatch = useDispatch()

    useEffect(() => {
        if (curHP < 0) {
            setCurHP(0)
            dispatch(updateHP(0))
        }
        if (side === 'left') {
            if (curHP > maxHPLeft) {
                setCurHP(maxHPLeft)
                dispatch(updateHP(maxHPLeft))
            }
        }
        if (side === 'right') {
            if (curHP > maxHPRight) {
                setCurHP(maxHPRight)
                dispatch(updateHP(maxHPRight))
            }
        }
    }, [curHP, maxHPLeft, maxHPRight])

    return(
        <>
            <Row xs={'3'}>
                <Col>
                    <h2>Current Health</h2>
                </Col>
                <Col>
                    <div className={'justify-content-center'}>
                        <InputGroup>
                            {side === 'left' && <><Input type={"range"} min={'0'} max={maxHPLeft} step={'0.1'} value={curHP} onInput={(e) => {
                                if (props.side !== side) dispatch(updateSide(props.side))
                                dispatch(updateHP(parseFloat(e.currentTarget.value)))
                                setCurHP(parseFloat(e.currentTarget.value))
                            }}></Input>
                                <Input type={"number"} min={'0'} max={maxHPLeft} value={curHP} onInput={(e) => {
                                    if (props.side !== side) dispatch(updateSide(props.side))
                                    dispatch(updateHP(parseFloat(e.currentTarget.value)))
                                    setCurHP(parseFloat(e.currentTarget.value))
                                }}></Input></>}

                            {side === 'right' && <><Input type={"range"} min={'0'} max={maxHPRight} step={'0.1'} value={curHP} onInput={(e) => {
                                if (props.side !== side) dispatch(updateSide(props.side))
                                dispatch(updateHP(parseFloat(e.currentTarget.value)))
                                setCurHP(parseFloat(e.currentTarget.value))
                            }}></Input>
                                <Input type={"number"} min={'0'} max={maxHPRight} value={curHP} onInput={(e) => {
                                    if (props.side !== side) dispatch(updateSide(props.side))
                                    dispatch(updateHP(parseFloat(e.currentTarget.value)))
                                    setCurHP(parseFloat(e.currentTarget.value))
                                }}></Input></>}
                        </InputGroup>
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default CurrentHealth