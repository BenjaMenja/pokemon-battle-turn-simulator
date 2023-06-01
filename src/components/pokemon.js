import {useState} from "react";
import {Button, Col, Row} from "reactstrap";
import MoveField from "./movefield";
import EffortValues from "./EffortValues";
import IndividualValues from "./IndividualValues";

function Pokemon() {
    const [name, setName] = useState("");
    const [sprite, setSprite] = useState();
    const [textValue, setTextValue] = useState("");
    const [pokemonData, setPokemonData] = useState();
    return (
        <div>
            <h1>
                Pokemon Name: {name}
            </h1>
            <img alt="" src={sprite} id={"sprite"} />
            <input type={"text"} value={textValue} onChange={(e) => {
                setTextValue(e.currentTarget.value);
            }}></input>
            <Button onClick={() => {
                let inputName = textValue.toLowerCase().replace(/ /g, "-")
                let link = "https://pokeapi.co/api/v2/pokemon/" + inputName + "/"
                fetch(link).then((response) => response.json()).then((data) => {
                    setPokemonData(data)
                    setName(data.name[0].toUpperCase() + data.name.substring(1))
                    setSprite(data.sprites.front_default)
                }).catch((err) => {
                    setPokemonData(undefined)
                    setName("")
                    window.alert("Error, Pokemon not found.")
                    setSprite(null)
                })
            }}>Add</Button>
            <MoveField moveData={pokemonData} />
            <Row xs={'2'}>
                <Col>
                    <EffortValues />
                </Col>
                <Col>
                    <IndividualValues />
                </Col>
            </Row>


        </div>
    )
}

export default Pokemon;