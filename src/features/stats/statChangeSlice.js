import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    StatChangesLeft: {
        attack: 0,
        defense: 0,
        spatk: 0,
        spdef: 0,
        speed: 0,
        accuracy: 0,
        evasion: 0
    },
    StatChangesRight: {
        attack: 0,
        defense: 0,
        spatk: 0,
        spdef: 0,
        speed: 0,
        accuracy: 0,
        evasion: 0
    },
    side: 'left'
}
export const statChangeSlice = createSlice({
    name: 'statChanges',
    initialState,
    reducers: {
        updateAttack(state, action) {
            if (state.side === 'left') {
                state.StatChangesLeft.attack = action.payload
            }
            if (state.side === 'right') {
                state.StatChangesRight.attack = action.payload
            }
        },
        updateDefense(state, action) {
            if (state.side === 'left') {
                state.StatChangesLeft.defense = action.payload
            }
            if (state.side === 'right') {
                state.StatChangesRight.defense = action.payload
            }
        },
        updateSpatk(state, action) {
            if (state.side === 'left') {
                state.StatChangesLeft.spatk = action.payload
            }
            if (state.side === 'right') {
                state.StatChangesRight.spatk = action.payload
            }
        },
        updateSpdef(state, action) {
            if (state.side === 'left') {
                state.StatChangesLeft.spdef = action.payload
            }
            if (state.side === 'right') {
                state.StatChangesRight.spdef = action.payload
            }
        },
        updateSpeed(state, action) {
            if (state.side === 'left') {
                state.StatChangesLeft.speed = action.payload
            }
            if (state.side === 'right') {
                state.StatChangesRight.speed = action.payload
            }
        },
        updateAccuracy(state, action) {
            if (state.side === 'left') {
                state.StatChangesLeft.accuracy = action.payload
            }
            if (state.side === 'right') {
                state.StatChangesRight.accuracy = action.payload
            }
        },
        updateEvasion(state, action) {
            if (state.side === 'left') {
                state.StatChangesLeft.evasion = action.payload
            }
            if (state.side === 'right') {
                state.StatChangesRight.evasion = action.payload
            }
        },
        updateSide(state, action) {
            state.side = action.payload
        }
    }
})

export const {updateAttack, updateDefense, updateSpatk, updateSpdef, updateSpeed, updateAccuracy, updateEvasion, updateSide} = statChangeSlice.actions

export default statChangeSlice.reducer