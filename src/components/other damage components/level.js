import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {updateLevel, updateSide} from "../../features/pokemon_field/pokemonSlice";

function Level(props) {
    const [value, setValue] = useState(1)
    const dispatch = useDispatch()
    const side = useSelector((state) => state.pokemon.side)
    useEffect(() => {
        if (value > 100) {
            setValue(100)
            dispatch(updateLevel(100))
        }
        if (value < 1 || isNaN(value)) {
            setValue(1)
            dispatch(updateLevel(1))
        }
    }, [value])

    return (
        <>
            <h3>Level</h3>
            <input type={"number"} value={value} onChange={(e) => {
                if (props.side !== side) dispatch(updateSide(props.side))
                setValue(parseInt(e.currentTarget.value))
                dispatch(updateLevel(parseInt(e.currentTarget.value)))
            }}></input>
        </>
    )
}

export default Level