import {Button} from "reactstrap";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchPkmnData, updateSide} from "../../features/pokemon_field/pokemonSlice";

function PokemonField(props) {
    const [textValue, setTextValue] = useState("");
    const dispatch = useDispatch()
    const pokemonData = useSelector((state) => state.pokemon.PokemonValuesLeft.name)
    const side = useSelector((state) => state.pokemon.side)
    const sprite = useSelector((state) => state.pokemon.PokemonValuesLeft.spriteData)

    return (
        <>
            <h3>
                Pokemon Name: {pokemonData}
            </h3>
            <img alt="" src={sprite} id={"sprite"} />
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