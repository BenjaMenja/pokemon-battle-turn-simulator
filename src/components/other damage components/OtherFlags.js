import {useState} from "react";
import {Button, Col, Input, Label, Row} from "reactstrap";

function OtherFlags(props) {

    const [displayFlags, setDisplayFlags] = useState(false)
    const toggle = () => setDisplayFlags((prevState) => !prevState)
    return(
        <>
            <Button onClick={toggle} color={'primary'}>Other Flags</Button>
            {displayFlags && <><Row xs={'5'} style={{fontSize: '0.75em'}}>
                <Col>
                    <div className={'d-flex'}>
                        <Input type={"checkbox"} onInput={() => {props.OtherFlags.minimize = !props.OtherFlags.minimize}}></Input>
                        <Label check>
                            Minimized
                        </Label>
                    </div>
                </Col>
                <Col>
                    <div className={'d-flex'}>
                        <Input type={"checkbox"} onInput={() => {props.OtherFlags.dig = !props.OtherFlags.dig}}></Input>
                        <Label check>
                            Dig
                        </Label>
                    </div>
                </Col>
                <Col>
                    <div className={'d-flex'}>
                        <Input type={"checkbox"} onInput={() => {props.OtherFlags.dive = !props.OtherFlags.dive}}></Input>
                        <Label check>
                            Dive
                        </Label>
                    </div>
                </Col>
                <Col>
                    <div className={'d-flex'}>
                        <Input type={"checkbox"} onInput={() => {props.OtherFlags.reflect = !props.OtherFlags.reflect}}></Input>
                        <Label check>
                            Reflect
                        </Label>
                    </div>
                </Col>
                <Col>
                    <div className={'d-flex'}>
                        <Input type={"checkbox"} onInput={() => {props.OtherFlags.lightscreen = !props.OtherFlags.lightscreen}}></Input>
                        <Label check>
                            Light Screen
                        </Label>
                    </div>
                </Col>
            </Row>
            <Row xs={'5'} style={{fontSize: '0.75em'}}>
                <Col>
                    <div className={'d-flex'}>
                        <Input type={"checkbox"} onInput={() => {props.OtherFlags.auroraveil = !props.OtherFlags.auroraveil}}></Input>
                        <Label check>
                            Aurora Veil
                        </Label>
                    </div>
                </Col>
            </Row>
            </>}
        </>
    )
}

export default OtherFlags