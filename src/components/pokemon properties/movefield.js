import {useEffect, useRef, useState} from "react";
import {Form, Input} from "reactstrap";
import MoveDropdown from "./movedropdown";

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
    const uppercaseMoves = useRef([])
    const [updater, setUpdater] = useState(false)

    useEffect(() => {
        setMoveInput("")
        if (props.moveData !== undefined) {
            console.log(props.moveData)
            matchingMoves.current = filterFunction(props.moveData.moves, "")
            uppercaseMoves.current = uppercaseMoveset(matchingMoves.current)
            setUpdater(true)
        }
    }, [props.moveData])

    return (
        <>
            <Form>
                <Input type={"text"} value={moveInput} placeholder={"Move Search"} style={{width: '75%', marginLeft: '12.5%'}} onChange={(e) => {
                    setMoveInput(e.currentTarget.value)
                    if (props.moveData !== undefined) {
                        matchingMoves.current = filterFunction(props.moveData.moves, e.currentTarget.value.toLowerCase().replace(/ /g, "-"))
                    }
                    uppercaseMoves.current = uppercaseMoveset(matchingMoves.current)
                    console.log(uppercaseMoves.current)
                }}></Input>
            </Form>
            <MoveDropdown moves={uppercaseMoves.current} update={updater} setUpdate={setUpdater} setMoveInput={setMoveInput} MoveProperties={props.MoveProperties}/>
        </>
    )
}

export default MoveField