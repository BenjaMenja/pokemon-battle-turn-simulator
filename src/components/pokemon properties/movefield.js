import {useEffect, useRef, useState} from "react";
import {Form, Input} from "reactstrap";
import MoveDropdown from "./movedropdown";
import {useSelector} from "react-redux";

function filterFunction(arr, textValue) {
    let filteredArray = []
    arr.forEach((item) => {
        if (item.move.name.includes(textValue)) {
            filteredArray.push(item.move.name)
        }
    })
    return filteredArray
}

function uppercaseMoveset(moveArray) {
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

function MoveField(props) {
    const matchingMoves = useRef([])
    const [moveInput, setMoveInput] = useState("")
    const [updater, setUpdater] = useState(false)
    const uppercaseMoves = useRef([])
    const side = useSelector((state) => state.moveField.side)
    const moveListLeft = useSelector((state) => state.moveField.moveListLeft)
    const moveListRight = useSelector((state) => state.moveField.moveListRight)

    useEffect(() => {
        setMoveInput("")
        if (side === 'left' && moveListLeft.length > 0) {
            matchingMoves.current = filterFunction(moveListLeft, "")
        }
        if (side === 'right' && moveListRight.length > 0) {
            matchingMoves.current = filterFunction(moveListRight, "")
        }
        uppercaseMoves.current = uppercaseMoveset(matchingMoves.current)
        setUpdater(prevState => !prevState)
    }, [moveListLeft, moveListRight])

    return (
        <>
            <h3>Move Name: {moveInput}</h3>
            <div className={'d-flex'}>
                <Input type={"text"} value={moveInput} placeholder={"Move Search"} style={{width: '75%', marginLeft: '12.5%'}} onChange={(e) => {
                    setMoveInput(e.currentTarget.value)
                    if (side === 'left' && moveListLeft.length > 0) {
                        matchingMoves.current = filterFunction(moveListLeft, e.currentTarget.value.toLowerCase().replace(/ /g, "-"))
                    }
                    if (side === 'right' && moveListRight.length > 0) {
                        matchingMoves.current = filterFunction(moveListRight, e.currentTarget.value.toLowerCase().replace(/ /g, "-"))
                    }
                    uppercaseMoves.current = uppercaseMoveset(matchingMoves.current)
                }}></Input>
                <MoveDropdown moves={uppercaseMoves.current} setMoveInput={setMoveInput} updater={updater} setUpdater={setUpdater}/>
            </div>

        </>
    )
}

export default MoveField