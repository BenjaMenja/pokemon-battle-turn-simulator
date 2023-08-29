import {useState} from "react";
import {Button} from "reactstrap";
import {useDispatch, useSelector} from "react-redux";
import {fetchItemData, updateSide} from "../../features/items/itemSlice";

function ItemField(props) {
    const itemLeft = useSelector((state) => state.items.itemLeft)
    const itemRight = useSelector((state) => state.items.itemRight)
    const side = useSelector((state) => state.items.side)
    const [textValue, setTextValue] = useState("");
    const dispatch = useDispatch()
    return (
        <>
            <h3>Item Name: {(props.side === 'left') ? itemLeft.name : itemRight.name}</h3>
            <img alt="" src={(props.side === 'left') ? itemLeft.sprite : itemRight.sprite} id={"sprite"} />
            <input type={"text"} value={textValue} onChange={(e) => {
                setTextValue(e.currentTarget.value);
            }}></input>
            <Button onClick={() => {
                if (props.side !== side) dispatch(updateSide(props.side))
                let inputName = textValue.toLowerCase().replace(/ /g, "-")
                dispatch(fetchItemData(inputName))
            }}>Add</Button>
        </>
    )
}

export default ItemField