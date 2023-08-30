import './App.css';
import Pokemon from "./components/pokemon";
import UniversalDamageComponents from "./components/UniversalDamageComponents";
import {Button, Col, Row} from "reactstrap";
import {useRef} from "react";
import DamageCalculator from "./components/Damage Calculator/DamageCalculator";
import {useSelector} from "react-redux";
import PokemonField from "./components/pokemon properties/PokemonField";
import StatChanges from "./components/other damage components/StatChanges";
import EffortValues from "./components/pokemon properties/EffortValues";
import IndividualValues from "./components/pokemon properties/IndividualValues";
import MoveField from "./components/pokemon properties/movefield";
import CurrentHealth from "./components/pokemon properties/CurrentHealth";
import AbilityDropdown from "./components/pokemon properties/AbilityDropdown";
import NatureDropdown from "./components/pokemon properties/NatureDropdown";
import ItemField from "./components/pokemon properties/ItemField";
import Level from "./components/other damage components/level";
import OtherFlags from "./components/other damage components/OtherFlags";

function App() {

    const PokemonValuesLeft = useSelector((state) => state.pokemon.PokemonValuesLeft)
    const PokemonValuesRight = useSelector((state) => state.pokemon.PokemonValuesRight)

    const StatChangesLeft = useSelector((state) => state.statChanges.StatChangesLeft)
    const StatChangesRight = useSelector((state) => state.statChanges.StatChangesRight)

    const EVsLeft = useSelector((state) => state.evs.EVsLeft)
    const EVsRight = useSelector((state) => state.evs.EVsRight)

    const IVsLeft = useSelector((state) => state.ivs.IVsLeft)
    const IVsRight = useSelector((state) => state.ivs.IVsRight)

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
          <Button onClick={() => console.log(PokemonValuesLeft)}>Click</Button>
          {/*<Row xs={'3'}>*/}
          {/*    <Col>*/}
          {/*        <Pokemon PokemonValues={PokemonValuesLeft} StatChanges={StatChangesLeft} MoveProperties={MovePropertiesLeft} EVs={EVsLeft} IVs={IVsLeft} OtherFlags={OtherFlagsLeft.current}/>*/}
          {/*    </Col>*/}
          {/*    <Col>*/}
          {/*        <UniversalDamageComponents Weather={Weather}/>*/}
          {/*        <DamageCalculator PokemonValuesLeft={PokemonValuesLeft.current} PokemonValuesRight={PokemonValuesRight.current} StatChangesLeft={StatChangesLeft.current} StatChangesRight={StatChangesRight.current} MovePropertiesLeft={MovePropertiesLeft.current} MovePropertiesRight={MovePropertiesRight.current} EVsLeft={EVsLeft.current} EVsRight={EVsRight.current} IVsLeft={IVsLeft.current} IVsRight={IVsRight.current} OtherFlagsLeft={OtherFlagsLeft.current} OtherFlagsRight={OtherFlagsRight.current} Weather={Weather.current}/>*/}
          {/*    </Col>*/}
          {/*    <Col>*/}
          {/*        <Pokemon PokemonValues={PokemonValuesRight} StatChanges={StatChangesRight} MoveProperties={MovePropertiesRight} EVs={EVsRight} IVs={IVsRight} OtherFlags={OtherFlagsRight.current}/>*/}
          {/*    </Col>*/}
          {/*</Row>*/}
          <PokemonField side={'left'}/>
          <StatChanges side={'left'}/>
          <EffortValues side={'left'}/>
          <IndividualValues side={'left'}/>
          <MoveField side={'left'} />
          <CurrentHealth side={'left'} />
          <AbilityDropdown side={'left'}/>
          <NatureDropdown side={'left'}/>
          <ItemField side={'left'} />
          <Level side={'left'} />
          <OtherFlags side={'left'} />
      </header>
    </div>
  );
}

export default App;
