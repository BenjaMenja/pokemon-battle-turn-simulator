import {Button} from "reactstrap";
import {useState} from "react";

function PokemonField(props) {
    const [name, setName] = useState("");
    const [sprite, setSprite] = useState();
    const [textValue, setTextValue] = useState("");

    return (
        <>
            <h3>
                Pokemon Name: {name}
            </h3>
            <img alt="" src={sprite} id={"sprite"} />
            <input type={"text"} value={textValue} onChange={(e) => {
                setTextValue(e.currentTarget.value);
            }}></input>
            <Button onClick={() => {
                let inputName = textValue.toLowerCase().replace(/ /g, "-")
                let link = "https://pokeapi.co/api/v2/pokemon/" + inputName + "/"
                fetch(link).then((response) => response.json()).then((data) => {
                    props.setData(data)
                    setName(data.name[0].toUpperCase() + data.name.substring(1))
                    setSprite(data.sprites.front_default)
                }).catch((err) => {
                    props.setData(undefined)
                    setName("")
                    window.alert("Error, Pokemon not found.")
                    setSprite(null)
                })
            }}>Add</Button>
        </>
    )
}

export default PokemonField