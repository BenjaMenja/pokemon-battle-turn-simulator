import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from "reactstrap";
import {useState} from "react";

function TerrainInput() {
    const [terrain, setTerrain] = useState('None')
    const [dropdownOpen, setDropdownOpen] = useState(false)
    const toggleDropdown = () => setDropdownOpen((prevState) => !prevState)

    let terrains = ["None", "Psychic", "Electric", "Misty", "Grassy"]

    return (
        <>
            <h3>Terrain: {terrain}</h3>
            <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
                <DropdownToggle caret>
                    Weather
                </DropdownToggle>
                <DropdownMenu>
                    {terrains.map((heading, index) => <DropdownItem onClick={() => {setTerrain(heading)}}>{heading}</DropdownItem>)}
                </DropdownMenu>
            </Dropdown>
        </>
    )
}

export default TerrainInput