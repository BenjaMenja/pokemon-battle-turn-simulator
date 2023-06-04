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

function Pokemon() {
    const [pokemonData, setPokemonData] = useState();

    return (
        <div>
            <PokemonField setData={setPokemonData} />
            <MoveField moveData={pokemonData} />
            <Row xs={'2'}>
                <Col>
                    <EffortValues />
                </Col>
                <Col>
                    <IndividualValues />
                </Col>
            </Row>
            <AbilityDropdown pokemonData={pokemonData}/>
            <ItemField />
            <Level />
            <CriticalHit />
            <Burned />
        </div>
    )
}

export default Pokemon;