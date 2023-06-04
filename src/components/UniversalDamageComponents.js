import WeatherInput from "./Universal Damage Components/Weather";
import TerrainInput from "./Universal Damage Components/Terrain";
import {Col, Row} from "reactstrap";

function UniversalDamageComponents() {
    return (
        <>
            <Row xs={'2'}>
                <Col>
                    <WeatherInput />
                </Col>
                <Col>
                    <TerrainInput />
                </Col>
            </Row>
        </>
    )
}

export default UniversalDamageComponents