import {useState} from "react";
import {Col, Row} from "reactstrap";
import MoveField from "./pokemon properties/movefield";
import EffortValues from "./pokemon properties/EffortValues";
import IndividualValues from "./pokemon properties/IndividualValues";
import ItemField from "./pokemon properties/ItemField";
import Level from "./other damage components/level";
import PokemonField from "./pokemon properties/PokemonField";
import AbilityDropdown from "./pokemon properties/AbilityDropdown";
import StatChanges from "./other damage components/StatChanges";
import NatureDropdown from "./pokemon properties/NatureDropdown";
import OtherFlags from "./other damage components/OtherFlags";
import CurrentHealth from "./pokemon properties/CurrentHealth";
import {Tab, Tabs, TabList, TabPanel} from "react-tabs";

function Pokemon(props) {
    const [pokemonData, setPokemonData] = useState()
    const [HPUpdater, SetHPUpdater] = useState(false)

    return (
        <>
            <Row xs={'2'} style={{paddingBottom: '1rem'}}>
                <Col>
                    <PokemonField setData={setPokemonData} PokemonValues={props.PokemonValues.current} EVs={props.EVs.current} IVs={props.IVs.current}/>
                </Col>
                <Col>
                    <MoveField moveData={pokemonData} MoveProperties={props.MoveProperties}/>
                </Col>
            </Row>

            <Tabs style={{marginBottom: '1rem'}}>
                <TabList>
                    <Tab>EVs</Tab>
                    <Tab>IVs</Tab>
                    <Tab>Stat Changes</Tab>
                </TabList>
                <TabPanel>
                    <EffortValues EVs={props.EVs.current} PokemonValues={props.PokemonValues.current} IVs={props.IVs.current} HPUpdater={HPUpdater} SetHPUpdater={SetHPUpdater}/>
                </TabPanel>
                <TabPanel>
                    <IndividualValues IVs={props.IVs.current} EVs={props.EVs.current} PokemonValues={props.PokemonValues.current} HPUpdater={HPUpdater} SetHPUpdater={SetHPUpdater} />
                </TabPanel>
                <TabPanel>
                    <StatChanges StatChanges={props.StatChanges.current} />
                </TabPanel>
            </Tabs>

            <CurrentHealth PokemonValues={props.PokemonValues.current} HPUpdater={HPUpdater} SetHPUpdater={SetHPUpdater}/>
            <AbilityDropdown pokemonData={pokemonData} PokemonValues={props.PokemonValues} />
            <NatureDropdown PokemonValues={props.PokemonValues} />
            <ItemField PokemonValues={props.PokemonValues} />
            <Level PokemonValues={props.PokemonValues.current} EVs={props.EVs.current} IVs={props.IVs.current} HPUpdater={HPUpdater} SetHPUpdater={SetHPUpdater} />
            <OtherFlags OtherFlags={props.OtherFlags}/>
        </>
    )
}

export default Pokemon;