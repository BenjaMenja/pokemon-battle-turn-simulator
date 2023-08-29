import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    IVsLeft: {
        HP: 0,
        attack: 0,
        defense: 0,
        spatk: 0,
        spdef: 0,
        speed: 0,
    },
    IVsRight: {
        HP: 0,
        attack: 0,
        defense: 0,
        spatk: 0,
        spdef: 0,
        speed: 0,
    },
    side: 'left'
}

export const ivSlice = createSlice({
    name: 'ivs',
    initialState,
    reducers: {
        updateIVHP(state, action) {
            if (state.side === 'left') {
                state.IVsLeft.HP = action.payload
            }
            if (state.side === 'right') {
                state.IVsRight.HP = action.payload
            }
        },
        updateAttack(state, action) {
            if (state.side === 'left') {
                state.IVsLeft.attack = action.payload
            }
            if (state.side === 'right') {
                state.IVsRight.attack = action.payload
            }
        },
        updateDefense(state, action) {
            if (state.side === 'left') {
                state.IVsLeft.defense = action.payload
            }
            if (state.side === 'right') {
                state.IVsRight.defense = action.payload
            }
        },
        updateSpatk(state, action) {
            if (state.side === 'left') {
                state.IVsLeft.spatk = action.payload
            }
            if (state.side === 'right') {
                state.IVsRight.spatk = action.payload
            }
        },
        updateSpdef(state, action) {
            if (state.side === 'left') {
                state.IVsLeft.spdef = action.payload
            }
            if (state.side === 'right') {
                state.IVsRight.spdef = action.payload
            }
        },
        updateSpeed(state, action) {
            if (state.side === 'left') {
                state.IVsLeft.speed = action.payload
            }
            if (state.side === 'right') {
                state.IVsRight.speed = action.payload
            }
        },
        updateSide(state, action) {
            state.side = action.payload
        }
    }
})

export const {updateIVHP, updateAttack, updateDefense, updateSpatk, updateSpdef, updateSpeed, updateSide} = ivSlice.actions

export default ivSlice.reducer