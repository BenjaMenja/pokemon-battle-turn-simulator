import './App.css';
import Pokemon from "./components/pokemon";
import UniversalDamageComponents from "./components/UniversalDamageComponents";
import {Col, Row} from "reactstrap";
import DamageCalculator from "./components/Damage Calculator/DamageCalculator";

function App() {

  return (
    <div className="App">
      <header className="App-header">
          <Row xs={'3'}>
              <Col>
                  <Pokemon side={'left'}/>
              </Col>
              <Col>
                  <UniversalDamageComponents />
                  <DamageCalculator />
              </Col>
              <Col>
                  <Pokemon side={'right'} />
              </Col>
          </Row>
      </header>
    </div>
  );
}

export default App;
