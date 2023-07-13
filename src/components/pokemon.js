import {useState} from "react";
import {Button, Col, Row} from "reactstrap";
import MoveField from "./pokemon properties/movefield";
import EffortValues from "./pokemon properties/EffortValues";
import IndividualValues from "./pokemon properties/IndividualValues";
import ItemField from "./pokemon properties/ItemField";
import Level from "./other damage components/level";
import CriticalHit from "./other damage components/criticalhit";
import Burned from "./other damage components/burned";
import PokemonField from "./pokemon properties/PokemonField";
import AbilityDropdown from "./pokemon properties/AbilityDropdown";
import StatChanges from "./other damage components/StatChanges";
import NatureDropdown from "./pokemon properties/NatureDropdown";
import OtherFlags from "./other damage components/OtherFlags";
import CurrentHealth from "./pokemon properties/CurrentHealth";

function Pokemon(props) {
    const [pokemonData, setPokemonData] = useState()
    const [visibleValues, setVisibleValues] = useState(false)
    const toggle = () => setVisibleValues((prevState) => !prevState)
    const [HPUpdater, SetHPUpdater] = useState(false)

    return (
        <>
            <PokemonField setData={setPokemonData} PokemonValues={props.PokemonValues.current} EVs={props.EVs.current} IVs={props.IVs.current}/>
            <MoveField moveData={pokemonData} MoveProperties={props.MoveProperties}/>
            <CurrentHealth PokemonValues={props.PokemonValues.current} HPUpdater={HPUpdater} SetHPUpdater={SetHPUpdater}/>
            <Button onClick={toggle} color={'primary'}>EV / IV Values</Button>
            {visibleValues && <Row xs={'2'}>
                <Col>
                    <EffortValues EVs={props.EVs.current} PokemonValues={props.PokemonValues.current} IVs={props.IVs.current} HPUpdater={HPUpdater} SetHPUpdater={SetHPUpdater}/>
                </Col>
                <Col>
                    <IndividualValues IVs={props.IVs.current} EVs={props.EVs.current} PokemonValues={props.PokemonValues.current} HPUpdater={HPUpdater} SetHPUpdater={SetHPUpdater} />
                </Col>
            </Row>}
            <AbilityDropdown pokemonData={pokemonData} PokemonValues={props.PokemonValues} />
            <NatureDropdown PokemonValues={props.PokemonValues} />
            <StatChanges StatChanges={props.StatChanges} />
            <ItemField PokemonValues={props.PokemonValues} />
            <Level PokemonValues={props.PokemonValues.current} EVs={props.EVs.current} IVs={props.IVs.current} HPUpdater={HPUpdater} SetHPUpdater={SetHPUpdater} />
            <Row xs={'2'}>
                <Col>
                    <CriticalHit PokemonValues={props.PokemonValues} />
                </Col>
                <Col>
                    <Burned PokemonValues={props.PokemonValues} />
                </Col>
            </Row>
            <OtherFlags OtherFlags={props.OtherFlags}/>
        </>
    )
}

export default Pokemon;