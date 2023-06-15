import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from "reactstrap";
import {useState} from "react";

function NatureDropdown(props) {
    const [nature, setNature] = useState('')
    const [open, setOpen] = useState(false)
    const toggle = () => {setOpen(prevState => (!prevState))}
    const natures = [
        'Hardy',
        'Lonely',
        'Brave',
        'Adamant',
        'Naughty',
        'Bold',
        'Docile',
        'Relaxed',
        'Impish',
        'Lax',
        'Timid',
        'Hasty',
        'Serious',
        'Jolly',
        'Naive',
        'Modest',
        'Mild',
        'Quiet',
        'Bashful',
        'Rash',
        'Calm',
        'Gentle',
        'Sassy',
        'Careful',
        'Quirky'
    ]

    const mapNatures = () => (natures.map((heading, index) => <DropdownItem onClick={() => {
        setNature(heading)
        props.PokemonValues.current.nature = heading
    }}>{heading}</DropdownItem>))
    return (
        <>
            <h3>Nature: {nature}</h3>
            <Dropdown isOpen={open} toggle={toggle}>
                <DropdownToggle caret>
                    Nature
                </DropdownToggle>
                <DropdownMenu>
                    {mapNatures()}
                </DropdownMenu>
            </Dropdown>
        </>
    )
}

export default NatureDropdown