import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from "reactstrap";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchMoveData, updateMoveSide} from "../../features/moves/moveFieldSlice";

function MoveDropdown(props) {
    const moves = props.moves
    const dispatch = useDispatch()
    const [dropdownOpen, setDropdownOpen] = useState(false)
    const toggleDropdown = () => setDropdownOpen((prevState) => !prevState)
    const side = useSelector((state) => state.moveField.side)
    const mapmoves = () => (moves === null || moves.length === 0) ? null : moves.map((heading, index) => <DropdownItem onClick={() => {
        if (props.side !== side) dispatch(updateMoveSide(props.side))
        props.setMoveInput(heading)
        let url = heading.split(" ")
        for (let i=0; i < url.length; i++) {
            url[i] = url[i][0].toLowerCase() + url[i].substring(1)
        }
        url = url.join("-")
        dispatch(fetchMoveData(url))
    }}>{heading}</DropdownItem>)

    useEffect(() => {
        mapmoves()
    }, [props.updater])

    return (
        <>
            <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
                <DropdownToggle caret>
                    Moves
                </DropdownToggle>
                <DropdownMenu>
                    {mapmoves()}
                </DropdownMenu>
            </Dropdown>
        </>
    )
}

export default MoveDropdown
