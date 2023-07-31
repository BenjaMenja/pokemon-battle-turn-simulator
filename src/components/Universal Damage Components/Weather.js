import {useState} from "react";
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from "reactstrap";


function WeatherInput(props) {

    const [weather, setWeather] = useState("None")
    const [dropdownOpen, setDropdownOpen] = useState(false)
    const toggleDropdown = () => setDropdownOpen((prevState) => !prevState)
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
                        props.Weather.current = heading
                    }}>{heading}</DropdownItem>)}
                </DropdownMenu>
            </Dropdown>
        </>
    )
}

export default WeatherInput