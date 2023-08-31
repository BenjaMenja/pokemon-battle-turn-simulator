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

    return (
        <>
            <Row xs={'2'} style={{paddingBottom: '1rem'}}>
                <Col>
                    <PokemonField side={props.side}/>
                </Col>
                <Col>
                    <MoveField side={props.side}/>
                </Col>
            </Row>

            <Tabs style={{marginBottom: '1rem'}}>
                <TabList>
                    <Tab>EVs</Tab>
                    <Tab>IVs</Tab>
                    <Tab>Stat Changes</Tab>
                </TabList>
                <TabPanel>
                    <EffortValues side={props.side}/>
                </TabPanel>
                <TabPanel>
                    <IndividualValues side={props.side}/>
                </TabPanel>
                <TabPanel>
                    <StatChanges side={props.side} />
                </TabPanel>
            </Tabs>

            <CurrentHealth side={props.side}/>
            <AbilityDropdown side={props.side} />
            <NatureDropdown side={props.side} />
            <ItemField side={props.side} />
            <Level side={props.side} />
            <OtherFlags side={props.side} />
        </>
    )
}

export default Pokemon;