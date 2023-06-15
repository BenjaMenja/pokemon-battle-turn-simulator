import {useState} from "react";
import {Col, Row} from "reactstrap";
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

function Pokemon(props) {
    const [pokemonData, setPokemonData] = useState();

    return (
        <div>
            <PokemonField setData={setPokemonData} PokemonValues={props.PokemonValues}/>
            <MoveField moveData={pokemonData} MoveProperties={props.MoveProperties}/>
            <Row xs={'2'}>
                <Col>
                    <EffortValues EVs={props.EVs}/>
                </Col>
                <Col>
                    <IndividualValues IVs={props.IVs}/>
                </Col>
            </Row>
            <AbilityDropdown pokemonData={pokemonData} PokemonValues={props.PokemonValues} />
            <NatureDropdown PokemonValues={props.PokemonValues} />
            <StatChanges StatChanges={props.StatChanges} />
            <ItemField PokemonValues={props.PokemonValues} />
            <Level PokemonValues={props.PokemonValues} />
            <CriticalHit PokemonValues={props.PokemonValues} />
            <Burned PokemonValues={props.PokemonValues} />
        </div>
    )
}

export default Pokemon;