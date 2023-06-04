import './App.css';
import Pokemon from "./components/pokemon";
import UniversalDamageComponents from "./components/UniversalDamageComponents";
import {Col, Row} from "reactstrap";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Row xs={'3'}>
              <Col>
                  <Pokemon />
              </Col>
              <Col>
                  <UniversalDamageComponents />
              </Col>
              <Col>
                  <Pokemon />
              </Col>

          </Row>

      </header>
    </div>
  );
}

export default App;
