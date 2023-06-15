import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from "reactstrap";
import {useEffect, useState} from "react";

function MoveDropdown(props) {
    const moves = props.moves
    const updater = props.update
    const [dropdownOpen, setDropdownOpen] = useState(false)
    const toggleDropdown = () => setDropdownOpen((prevState) => !prevState)
    const mapmoves = () => (moves === null || moves.length === 0) ? null : moves.map((heading, index) => <DropdownItem onClick={() => {
        props.setMoveInput(heading)
        let url = heading.split(" ")
        for (let i=0; i < url.length; i++) {
            url[i] = url[i][0].toLowerCase() + url[i].substring(1)
        }
        url = url.join("-")
        fetch("https://pokeapi.co/api/v2/move/" + url + "/").then((res) => res.json()).then((data) => {
            if (data.power === null) props.MoveProperties.current.power = 0
            else props.MoveProperties.current.power = data.power

            if (data.accuracy === null) props.MoveProperties.current.accuracy = 0
            else props.MoveProperties.current.accuracy = data.accuracy

            props.MoveProperties.current.type = data.type.name
            props.MoveProperties.current.category = data.damage_class.name
            props.MoveProperties.current.name = url
        }).catch((err) => {
            window.alert('Error, invalid move.')
            props.MoveProperties.current.name = ''
        })
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
