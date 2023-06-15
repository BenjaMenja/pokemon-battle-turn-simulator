import {useEffect, useState} from "react";

function Level(props) {
    const [value, setValue] = useState(1)

    useEffect(() => {
        if (value > 100) {
            setValue(100)
        }
        if (value < 1) {
            setValue(1)
        }
    }, [value])
    return (
        <>
            <h3>Level</h3>
            <input type={"number"} value={value} onChange={(e) => {
                setValue(parseInt(e.currentTarget.value))
                props.PokemonValues.current.level = parseInt(e.currentTarget.value)
            }}></input>
        </>
    )
}

export default Level