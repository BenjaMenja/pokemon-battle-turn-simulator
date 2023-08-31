import {Button} from "reactstrap";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchPkmnData, updateSide} from "../../features/pokemon_field/pokemonSlice";

function PokemonField(props) {
    const [textValue, setTextValue] = useState("");
    const dispatch = useDispatch()
    const pokemonNameLeft = useSelector((state) => state.pokemon.PokemonValuesLeft.name)
    const pokemonNameRight = useSelector((state) => state.pokemon.PokemonValuesRight.name)
    const side = useSelector((state) => state.pokemon.side)
    const spriteLeft = useSelector((state) => state.pokemon.PokemonValuesLeft.spriteData)
    const spriteRight = useSelector((state) => state.pokemon.PokemonValuesRight.spriteData)

    return (
        <>
            <h3>
                Pokemon Name: {(props.side === 'left') ? pokemonNameLeft : pokemonNameRight}
            </h3>
            <img alt="" src={(props.side === 'left') ? spriteLeft : spriteRight} id={"sprite"} />
            <input type={"text"} value={textValue} onChange={(e) => {
                setTextValue(e.currentTarget.value);
            }}></input>
            <Button onClick={() => {
                if (props.side !== side) {
                    dispatch(updateSide(props.side))
                }
                dispatch(fetchPkmnData(textValue))
            }}>Add</Button>
        </>
    )
}

export default PokemonField