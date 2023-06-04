import {Input, Label} from "reactstrap";
import {useState} from "react";

function CriticalHit() {

    const [crit, setCrit] = useState(false)

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