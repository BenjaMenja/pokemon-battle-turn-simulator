import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from "reactstrap";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {updateTerrain} from "../../features/environment/environmentSlice";

function TerrainInput() {
    const [terrain, setTerrain] = useState('None')
    const [dropdownOpen, setDropdownOpen] = useState(false)
    const toggleDropdown = () => setDropdownOpen((prevState) => !prevState)
    const dispatch = useDispatch()

    let terrains = ["None", "Psychic", "Electric", "Misty", "Grassy"]

    return (
        <>
            <h3>Terrain: {terrain}</h3>
            <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
                <DropdownToggle caret>
                    Terrain
                </DropdownToggle>
                <DropdownMenu>
                    {terrains.map((heading, index) => <DropdownItem onClick={() => {
                        setTerrain(heading)
                        dispatch(updateTerrain(heading))
                    }}>{heading}</DropdownItem>)}
                </DropdownMenu>
            </Dropdown>
        </>
    )
}

export default TerrainInput