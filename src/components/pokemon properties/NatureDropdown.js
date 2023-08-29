import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from "reactstrap";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {updateNature, updateSide} from "../../features/pokemon_field/pokemonSlice";

function NatureDropdown(props) {
    const [nature, setNature] = useState('')
    const [open, setOpen] = useState(false)
    const side = useSelector((state) => state.pokemon.side)
    const toggle = () => {
        setOpen(prevState => (!prevState))
        if (props.side !== side) dispatch(updateSide(props.side))
    }
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

    const dispatch = useDispatch()

    const mapNatures = () => (natures.map((heading, index) => <DropdownItem onClick={() => {
        setNature(heading)
        dispatch(updateNature(heading))
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