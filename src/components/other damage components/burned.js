import {Input, Label} from "reactstrap";
import {useEffect, useState} from "react";

function Burned(props) {

    const [burned, setBurned] = useState(false)

    useEffect(() => {
        props.PokemonValues.current.burned = burned
    }, [burned])

    return (
        <>
            <div className={'d-flex'}>
                <Input type={"checkbox"} checked={burned} onInput={() => {
                    setBurned(!burned)
                }}/>
                <Label check>
                    Burned?
                </Label>
            </div>
        </>
    )
}

export default Burned