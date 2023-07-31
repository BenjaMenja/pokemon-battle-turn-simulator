import './App.css';
import Pokemon from "./components/pokemon";
import UniversalDamageComponents from "./components/UniversalDamageComponents";
import {Col, Row} from "reactstrap";
import {useRef} from "react";
import DamageCalculator from "./components/Damage Calculator/DamageCalculator";

function App() {
    const PokemonValuesLeft = useRef({
        level: 1,
        HP: 0,
        attack: 0,
        defense: 0,
        spatk: 0,
        spdef: 0,
        speed: 0,
        type: '',
        type2: '',
        ability: '',
        item: '',
        nature: '',
        isCriticalHit: false,
        burned: false,
        currentHP: 0,
        maxHP: 0
    })

    const PokemonValuesRight = useRef({
        level: 1,
        HP: 0,
        attack: 0,
        defense: 0,
        spatk: 0,
        spdef: 0,
        speed: 0,
        type: '',
        type2: '',
        ability: '',
        item: '',
        nature: '',
        isCriticalHit: false,
        burned: false,
        currentHP: 0,
        maxHP: 0
    })

    const StatChangesLeft = useRef({
        attack: 0,
        defense: 0,
        spatk: 0,
        spdef: 0,
        speed: 0,
        accuracy: 0,
        evasion: 0
    })

    const StatChangesRight = useRef({
        attack: 0,
        defense: 0,
        spatk: 0,
        spdef: 0,
        speed: 0,
        accuracy: 0,
        evasion: 0
    })

    const MovePropertiesLeft = useRef({
        power: 0,
        accuracy: 0,
        type: '',
        category: '',
        name: ''
    })

    const MovePropertiesRight = useRef({
        power: 0,
        accuracy: 0,
        type: '',
        category: '',
        name: ''
    })

    const EVsLeft = useRef({
        HP: 0,
        attack: 0,
        defense: 0,
        spatk: 0,
        spdef: 0,
        speed: 0,
    })

    const EVsRight = useRef({
        HP: 0,
        attack: 0,
        defense: 0,
        spatk: 0,
        spdef: 0,
        speed: 0,
    })

    const IVsLeft = useRef({
        HP: 0,
        attack: 0,
        defense: 0,
        spatk: 0,
        spdef: 0,
        speed: 0,
    })

    const IVsRight = useRef({
        HP: 0,
        attack: 0,
        defense: 0,
        spatk: 0,
        spdef: 0,
        speed: 0,
    })

    const OtherFlagsLeft = useRef({
        minimize: false,
        dig: false,
        dive: false,
        reflect: false,
        lightscreen: false,
        auroraveil: false
    })

    const OtherFlagsRight = useRef({
        minimize: false,
        dig: false,
        dive: false,
        reflect: false,
        lightscreen: false,
        auroraveil: false
    })

    const Weather = useRef("")

  return (
    <div className="App">
      <header className="App-header">
          {/*<Button onClick={() => console.log(MovePropertiesLeft)} />*/}
          <Row xs={'3'}>
              <Col>
                  <Pokemon PokemonValues={PokemonValuesLeft} StatChanges={StatChangesLeft} MoveProperties={MovePropertiesLeft} EVs={EVsLeft} IVs={IVsLeft} OtherFlags={OtherFlagsLeft.current}/>
              </Col>
              <Col>
                  <UniversalDamageComponents Weather={Weather}/>
                  <DamageCalculator PokemonValuesLeft={PokemonValuesLeft.current} PokemonValuesRight={PokemonValuesRight.current} StatChangesLeft={StatChangesLeft.current} StatChangesRight={StatChangesRight.current} MovePropertiesLeft={MovePropertiesLeft.current} MovePropertiesRight={MovePropertiesRight.current} EVsLeft={EVsLeft.current} EVsRight={EVsRight.current} IVsLeft={IVsLeft.current} IVsRight={IVsRight.current} OtherFlagsLeft={OtherFlagsLeft.current} OtherFlagsRight={OtherFlagsRight.current} Weather={Weather}/>
              </Col>
              <Col>
                  <Pokemon PokemonValues={PokemonValuesRight} StatChanges={StatChangesRight} MoveProperties={MovePropertiesRight} EVs={EVsRight} IVs={IVsRight} OtherFlags={OtherFlagsRight.current}/>
              </Col>
          </Row>
      </header>
    </div>
  );
}

export default App;
