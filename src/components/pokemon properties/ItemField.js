import {useState} from "react";
import {Button} from "reactstrap";

function ItemField(props) {
    const [name, setName] = useState("");
    const [sprite, setSprite] = useState();
    const [textValue, setTextValue] = useState("");
    const [itemData, setItemData] = useState();
    return (
        <>
            <h3>Item Name: {name}</h3>
            <img alt="" src={sprite} id={"sprite"} />
            <input type={"text"} value={textValue} onChange={(e) => {
                setTextValue(e.currentTarget.value);
            }}></input>
            <Button onClick={() => {
                let inputName = textValue.toLowerCase().replace(/ /g, "-")
                let link = "https://pokeapi.co/api/v2/item/" + inputName + "/"
                fetch(link).then((response) => response.json()).then((data) => {
                    setItemData(data)
                    props.PokemonValues.current.item = data.name
                    setName(data.name[0].toUpperCase() + data.name.substring(1))
                    setSprite(data.sprites.default)
                }).catch((err) => {
                    setItemData(undefined)
                    props.PokemonValues.current.item = ''
                    setName("")
                    window.alert("Error, Item not found.")
                    setSprite(null)
                })
            }}>Add</Button>
        </>
    )
}

export default ItemField