import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from "reactstrap";
import {useEffect, useRef, useState} from "react";
import {uppercaseFormat} from "../../utils/utilities";
import {useDispatch, useSelector} from "react-redux";
import {updateSide} from "../../features/pokemon_field/abilitySlice";
import {updateAbility} from "../../features/pokemon_field/pokemonSlice";

function GetAbilityNames(abilities) {
    let arr = []
    abilities.forEach((item) => {
        arr.push(item.ability.name)
    })
    return arr
}

function uppercaseAbilities(moveArray) {
    let uppercaseArray = []
    moveArray.forEach((move) => {
        uppercaseArray.push(uppercaseFormat(move))
    })
    return uppercaseArray
}

function AbilityDropdown(props) {

    const [ability, setAbility] = useState('')
    const [dropdownOpen, setDropdownOpen] = useState(false)
    const abilitiesLeft = useSelector((state) => state.abilities.abilitiesLeft)
    const abilitiesRight = useSelector((state) => state.abilities.abilitiesRight)
    const abilityNames = useRef([])
    const uppercaseAbilityArray = useRef([])
    const side = useSelector((state) => state.abilities.side)
    const dispatch = useDispatch()

    useEffect(() => {
        setAbility('')
        if (props.side !== side) dispatch(updateSide(props.side))
        if (side === 'left' && abilitiesLeft.length > 0) {
            abilityNames.current = GetAbilityNames(abilitiesLeft)
            uppercaseAbilityArray.current = uppercaseAbilities(abilityNames.current)
        }
        if (side === 'right' && abilitiesRight.length > 0) {
            abilityNames.current = GetAbilityNames(abilitiesRight)
            uppercaseAbilityArray.current = uppercaseAbilities(abilityNames.current)
        }
    }, [abilitiesLeft, abilitiesRight])

    const toggleDropdown = () => setDropdownOpen((prevState) => !prevState)
    const mapabilities = () => (uppercaseAbilityArray.current.length === 0) ? null : uppercaseAbilityArray.current.map((heading, index) => <DropdownItem onClick={() => {
        setAbility(heading)
        dispatch(updateAbility(heading))
    }}>{heading}</DropdownItem>)
    return (
        <>
            <h3>Ability Name: {ability}</h3>
            <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
                <DropdownToggle caret>
                    Ability
                </DropdownToggle>
                <DropdownMenu>
                    {mapabilities()}
                </DropdownMenu>
            </Dropdown>
        </>
    )
}

export default AbilityDropdown
