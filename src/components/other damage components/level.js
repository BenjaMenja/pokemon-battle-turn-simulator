import {useEffect, useState} from "react";
import {calculateMaxHP} from "../../utils/utilities";

function Level(props) {
    const [value, setValue] = useState(1)

    useEffect(() => {
        if (value > 100) {
            setValue(100)
        }
        if (value < 1) {
            setValue(1)
        }
        props.SetHPUpdater((prevState) => !prevState)
        props.PokemonValues.maxHP = calculateMaxHP(props.PokemonValues.HP, props.EVs.HP, props.IVs.HP, value)
    }, [value])

    return (
        <>
            <h3>Level</h3>
            <input type={"number"} value={value} onChange={(e) => {
                setValue(parseInt(e.currentTarget.value))
                props.PokemonValues.level = parseInt(e.currentTarget.value)
            }}></input>
        </>
    )
}

export default Level