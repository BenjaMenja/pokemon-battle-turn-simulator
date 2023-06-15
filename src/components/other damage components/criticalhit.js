import {Input, Label} from "reactstrap";
import {useEffect, useState} from "react";

function CriticalHit(props) {

    const [crit, setCrit] = useState(false)

    useEffect(() => {
        props.PokemonValues.current.isCriticalHit = crit
    }, [crit])

    return (
        <>
            <div className={'d-flex'}>
                <Input type={"checkbox"} checked={crit} onInput={() => {
                    setCrit(!crit)
                }}/>
                <Label check>
                    Critical Hit
                </Label>
            </div>
        </>
    )
}

export default CriticalHit