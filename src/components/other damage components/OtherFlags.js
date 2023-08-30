import {useState} from "react";
import {Button, Col, Input, Label, Row} from "reactstrap";
import {useDispatch, useSelector} from "react-redux";
import {
    updateAuroraVeil, updateBurned,
    updateCriticalHit,
    updateDig,
    updateDive, updateLightScreen,
    updateMinimize, updateReflect,
    updateSide
} from "../../features/pokemon_field/otherFlagsSlice";

function OtherFlags(props) {

    const [displayFlags, setDisplayFlags] = useState(false)
    const toggle = () => setDisplayFlags((prevState) => !prevState)
    const dispatch = useDispatch()
    const side = useSelector((state) => state.otherFlags.side)
    return(
        <>
            <Button onClick={toggle} color={'primary'}>Other Flags</Button>
            {displayFlags && <><Row xs={'5'} style={{fontSize: '0.75em'}}>
                <Col>
                    <div className={'d-flex'}>
                        <Input type={"checkbox"} onInput={() => {
                            if (props.side !== side) dispatch(updateSide(props.side))
                            dispatch(updateMinimize())
                        }}></Input>
                        <Label check>
                            Minimized
                        </Label>
                    </div>
                </Col>
                <Col>
                    <div className={'d-flex'}>
                        <Input type={"checkbox"} onInput={() => {
                            if (props.side !== side) dispatch(updateSide(props.side))
                            dispatch(updateDig())
                        }}></Input>
                        <Label check>
                            Dig
                        </Label>
                    </div>
                </Col>
                <Col>
                    <div className={'d-flex'}>
                        <Input type={"checkbox"} onInput={() => {
                            if (props.side !== side) dispatch(updateSide(props.side))
                            dispatch(updateDive())
                        }}></Input>
                        <Label check>
                            Dive
                        </Label>
                    </div>
                </Col>
                <Col>
                    <div className={'d-flex'}>
                        <Input type={"checkbox"} onInput={() => {
                            if (props.side !== side) dispatch(updateSide(props.side))
                            dispatch(updateReflect())
                        }}></Input>
                        <Label check>
                            Reflect
                        </Label>
                    </div>
                </Col>
                <Col>
                    <div className={'d-flex'}>
                        <Input type={"checkbox"} onInput={() => {
                            if (props.side !== side) dispatch(updateSide(props.side))
                            dispatch(updateLightScreen())
                        }}></Input>
                        <Label check>
                            Light Screen
                        </Label>
                    </div>
                </Col>
            </Row>
            <Row xs={'5'} style={{fontSize: '0.75em'}}>
                <Col>
                    <div className={'d-flex'}>
                        <Input type={"checkbox"} onInput={() => {
                            if (props.side !== side) dispatch(updateSide(props.side))
                            dispatch(updateAuroraVeil())
                        }}></Input>
                        <Label check>
                            Aurora Veil
                        </Label>
                    </div>
                </Col>
                <Col>
                    <div className={'d-flex'}>
                        <Input type={"checkbox"} onInput={() => {
                            if (props.side !== side) dispatch(updateSide(props.side))
                            dispatch(updateCriticalHit())
                        }}/>
                        <Label check>
                            Critical Hit
                        </Label>
                    </div>
                </Col>
                <Col>
                    <div className={'d-flex'}>
                        <Input type={"checkbox"} onInput={() => {
                            if (props.side !== side) dispatch(updateSide(props.side))
                            dispatch(updateBurned())
                        }}/>
                        <Label check>
                            Burned?
                        </Label>
                    </div>
                </Col>
            </Row>
            </>}
        </>
    )
}

export default OtherFlags