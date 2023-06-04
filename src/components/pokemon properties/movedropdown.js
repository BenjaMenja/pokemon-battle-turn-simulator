import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from "reactstrap";
import {useEffect, useState} from "react";

function MoveDropdown(props) {
    const moves = props.moves
    const updater = props.update
    const [dropdownOpen, setDropdownOpen] = useState(false)
    const toggleDropdown = () => setDropdownOpen((prevState) => !prevState)
    const mapmoves = () => (moves === null || moves.length === 0) ? null : moves.map((heading, index) => <DropdownItem onClick={() => {
        props.setMoveInput(heading)
    }}>{heading}</DropdownItem>)

    useEffect(() => {
        mapmoves()
        props.setUpdate(false)
    }, [updater])

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
