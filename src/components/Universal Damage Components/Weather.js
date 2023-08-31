import {useState} from "react";
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from "reactstrap";
import {useDispatch} from "react-redux";
import {updateWeather} from "../../features/environment/environmentSlice";


function WeatherInput(props) {

    const [weather, setWeather] = useState("None")
    const [dropdownOpen, setDropdownOpen] = useState(false)
    const toggleDropdown = () => setDropdownOpen((prevState) => !prevState)
    const dispatch = useDispatch()
    let weathers = ["None", "Rain", "Harsh Sunlight", "Sandstorm", "Snow", "Extremely Harsh Sunlight", "Heavy Rain", "Strong Winds"]
    return (
        <>
            <h3>Weather: {weather}</h3>
            <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
                <DropdownToggle caret>
                    Weather
                </DropdownToggle>
                <DropdownMenu>
                    {weathers.map((heading, index) => <DropdownItem onClick={() => {
                        setWeather(heading)
                        dispatch(updateWeather(heading))
                    }}>{heading}</DropdownItem>)}
                </DropdownMenu>
            </Dropdown>
        </>
    )
}

export default WeatherInput