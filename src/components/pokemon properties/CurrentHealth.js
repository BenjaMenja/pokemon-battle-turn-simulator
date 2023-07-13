import {Input, InputGroup} from "reactstrap";
import {useEffect, useState} from "react";

function CurrentHealth(props) {
    const [curHP, setCurHP] = useState(props.PokemonValues.maxHP)

    useEffect(() => {
        if (curHP < 0) {
            setCurHP(0)
            props.PokemonValues.currentHP = 0
        }
        if (curHP > props.PokemonValues.maxHP) {
            setCurHP(props.PokemonValues.maxHP)
            props.PokemonValues.currentHP = props.PokemonValues.maxHP
        }
    }, [curHP])

    useEffect(() => {
        console.log(props.PokemonValues.maxHP)
        if (curHP > props.PokemonValues.maxHP) {
            setCurHP(props.PokemonValues.maxHP)
        }
    }, [props.HPUpdater])

    return(
        <>
            <h3>Current Health</h3>
            <InputGroup>
                <Input style={{width: '60%', marginLeft: '20%', marginRight: '20%'}} type={"range"} min={'0'} max={props.PokemonValues.maxHP} step={'0.1'} value={curHP} onInput={(e) => {
                    props.PokemonValues.currentHP = parseFloat(e.currentTarget.value)
                    setCurHP(parseFloat(e.currentTarget.value))
                }}></Input>
                <Input style={{width: '60%', marginLeft: '20%', marginRight: '20%'}} type={"number"} min={'0'} max={props.PokemonValues.maxHP} value={curHP} onInput={(e) => {
                    props.PokemonValues.currentHP = parseFloat(e.currentTarget.value)
                    setCurHP(parseFloat(e.currentTarget.value))
                }}></Input>
            </InputGroup>
        </>
    )
}

export default CurrentHealth