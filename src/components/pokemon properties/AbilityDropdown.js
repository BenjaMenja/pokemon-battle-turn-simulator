import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from "reactstrap";
import {useEffect, useRef, useState} from "react";

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

function uppercaseFormat(word) {
    const words = word.split("-")
    for (let i=0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substring(1)
    }

    return words.join(" ")
}


function AbilityDropdown(props) {

    const [ability, setAbility] = useState('')
    const [dropdownOpen, setDropdownOpen] = useState(false)
    const abilitynames = useRef([])
    const uppercaseAbilityArray = useRef([])

    useEffect(() => {
        setAbility('')
        if (props.pokemonData !== undefined) {
            abilitynames.current = GetAbilityNames(props.pokemonData.abilities)
            uppercaseAbilityArray.current = uppercaseAbilities(abilitynames.current)
        }
    }, [props.pokemonData])

    const toggleDropdown = () => setDropdownOpen((prevState) => !prevState)
    const mapabilities = () => (props.pokemonData === null || props.pokemonData === undefined) ? null : uppercaseAbilityArray.current.map((heading, index) => <DropdownItem onClick={() => {
        setAbility(heading)
        props.PokemonValues.current.ability = heading
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
