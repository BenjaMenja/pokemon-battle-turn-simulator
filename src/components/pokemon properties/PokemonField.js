import {Button} from "reactstrap";
import {useState} from "react";
import {calculateMaxHP} from "../../utils/utilities";

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
                    props.PokemonValues.HP = data.stats[0].base_stat
                    props.PokemonValues.attack = data.stats[1].base_stat
                    props.PokemonValues.defense = data.stats[2].base_stat
                    props.PokemonValues.spatk = data.stats[3].base_stat
                    props.PokemonValues.spdef = data.stats[4].base_stat
                    props.PokemonValues.speed = data.stats[5].base_stat
                    props.PokemonValues.type1 = data.types[0].type.name
                    props.PokemonValues.maxHP = calculateMaxHP(data.stats[0].base_stat, props.EVs.HP, props.IVs.HP, props.PokemonValues.level)
                    if (data.types.length === 2) {
                        props.PokemonValues.type2 = data.types[1].type.name
                    } else props.PokemonValues.type2 = ''
                    props.PokemonValues.ability = uppercaseFormat(data.abilities[0].ability.name)
                    setName(data.name[0].toUpperCase() + data.name.substring(1))
                    setSprite(data.sprites.front_default)
                }).catch(() => {
                    props.setData(undefined)
                    props.PokemonValues.HP = 0
                    props.PokemonValues.attack = 0
                    props.PokemonValues.defense = 0
                    props.PokemonValues.spatk = 0
                    props.PokemonValues.spdef = 0
                    props.PokemonValues.speed = 0
                    props.PokemonValues.type1 = ''
                    props.PokemonValues.type2 = ''
                    props.PokemonValues.ability = ''
                    setName("")
                    window.alert("Error, Pokemon not found.")
                    setSprite(null)
                })
            }}>Add</Button>
        </>
    )
}

export default PokemonField