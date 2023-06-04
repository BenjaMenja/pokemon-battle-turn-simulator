import {Input, Label} from "reactstrap";
import {useState} from "react";

function Burned() {

    const [burned, setBurned] = useState(false)

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