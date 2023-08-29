import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    EVsLeft: {
        HP: 0,
        attack: 0,
        defense: 0,
        spatk: 0,
        spdef: 0,
        speed: 0,
    },
    EVsRight: {
        HP: 0,
        attack: 0,
        defense: 0,
        spatk: 0,
        spdef: 0,
        speed: 0,
    },
    side: 'left',
    evSumLeft: 0,
    evSumRight: 0
}

export const evSlice = createSlice({
    name: 'evs',
    initialState,
    reducers: {
        updateEVHP(state, action) {
            if (state.side === 'left') {
                state.EVsLeft.HP = action.payload
                evSlice.caseReducers.statSum(state)
            }
            if (state.side === 'right') {
                state.EVsRight.HP = action.payload
                evSlice.caseReducers.statSum(state)
            }
        },
        updateAttack(state, action) {
            if (state.side === 'left') {
                state.EVsLeft.attack = action.payload
                evSlice.caseReducers.statSum(state)
            }
            if (state.side === 'right') {
                state.EVsRight.attack = action.payload
                evSlice.caseReducers.statSum(state)
            }
        },
        updateDefense(state, action) {
            if (state.side === 'left') {
                state.EVsLeft.defense = action.payload
                evSlice.caseReducers.statSum(state)
            }
            if (state.side === 'right') {
                state.EVsRight.defense = action.payload
                evSlice.caseReducers.statSum(state)
            }
        },
        updateSpatk(state, action ) {
            if (state.side === 'left') {
                state.EVsLeft.spatk = action.payload
                evSlice.caseReducers.statSum(state)
            }
            if (state.side === 'right') {
                state.EVsRight.spatk = action.payload
                evSlice.caseReducers.statSum(state)
            }
        },
        updateSpdef(state, action) {
            if (state.side === 'left') {
                state.EVsLeft.spdef = action.payload
                evSlice.caseReducers.statSum(state)
            }
            if (state.side === 'right') {
                state.EVsRight.spdef = action.payload
                evSlice.caseReducers.statSum(state)
            }
        },
        updateSpeed(state, action) {
            if (state.side === 'left') {
                state.EVsLeft.speed = action.payload
                evSlice.caseReducers.statSum(state)
            }
            if (state.side === 'right') {
                state.EVsRight.speed = action.payload
                evSlice.caseReducers.statSum(state)
            }
        },
        statSum(state) {
            if (state.side === 'left') {
                state.evSumLeft = state.EVsLeft.HP + state.EVsLeft.attack + state.EVsLeft.defense + state.EVsLeft.spatk + state.EVsLeft.spdef + state.EVsLeft.speed
            }
            if (state.side === 'right') {
                state.evSumRight = state.EVsRight.HP + state.EVsRight.attack + state.EVsRight.defense + state.EVsRight.spatk + state.EVsRight.spdef + state.EVsRight.speed
            }
        },
        updateSide(state, action) {
            state.side = action.payload
        }
    }
})

export const {updateEVHP, updateAttack, updateDefense, updateSpatk, updateSpdef, updateSpeed, statSum, updateSide} = evSlice.actions

export default evSlice.reducer