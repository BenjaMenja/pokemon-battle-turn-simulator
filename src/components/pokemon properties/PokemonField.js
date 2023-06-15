import {Button} from "reactstrap";
import {useState} from "react";

function uppercaseFormat(word) {
    const words = word.split("-")
    for (let i=0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substring(1)
    }

    return words.join(" ")
}

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
                    props.PokemonValues.current.HP = data.stats[0].base_stat
                    props.PokemonValues.current.attack = data.stats[1].base_stat
                    props.PokemonValues.current.defense = data.stats[2].base_stat
                    props.PokemonValues.current.spatk = data.stats[3].base_stat
                    props.PokemonValues.current.spdef = data.stats[4].base_stat
                    props.PokemonValues.current.speed = data.stats[5].base_stat
                    props.PokemonValues.current.type1 = data.types[0].type.name
                    if (data.types.length === 2) {
                        props.PokemonValues.current.type2 = data.types[1].type.name
                    } else props.PokemonValues.current.type2 = ''
                    props.PokemonValues.current.ability = uppercaseFormat(data.abilities[0].ability.name)
                    setName(data.name[0].toUpperCase() + data.name.substring(1))
                    setSprite(data.sprites.front_default)
                }).catch((err) => {
                    props.setData(undefined)
                    props.PokemonValues.current.HP = 0
                    props.PokemonValues.current.attack = 0
                    props.PokemonValues.current.defense = 0
                    props.PokemonValues.current.spatk = 0
                    props.PokemonValues.current.spdef = 0
                    props.PokemonValues.current.speed = 0
                    props.PokemonValues.current.type1 = ''
                    props.PokemonValues.current.type2 = ''
                    props.PokemonValues.current.ability = ''
                    setName("")
                    window.alert("Error, Pokemon not found.")
                    setSprite(null)
                })
            }}>Add</Button>
        </>
    )
}

export default PokemonField