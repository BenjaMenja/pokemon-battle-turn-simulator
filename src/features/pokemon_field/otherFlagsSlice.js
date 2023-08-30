import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    otherFlagsLeft: {
        isCriticalHit: false,
        burned: false,
        minimize: false,
        dig: false,
        dive: false,
        reflect: false,
        lightscreen: false,
        auroraveil: false
    },
    otherFlagsRight: {
        isCriticalHit: false,
        burned: false,
        minimize: false,
        dig: false,
        dive: false,
        reflect: false,
        lightscreen: false,
        auroraveil: false
    },
    side: 'left'
}

export const otherFlagsSlice = createSlice({
    name: 'otherFlags',
    initialState,
    reducers: {
        updateSide(state, action) {
            state.side = action.payload
        },
        updateCriticalHit(state) {
            ((state.side === 'left') ? (state.otherFlagsLeft.isCriticalHit = !state.otherFlagsLeft.isCriticalHit) : (state.otherFlagsRight.isCriticalHit = !state.otherFlagsRight.isCriticalHit))
        },
        updateBurned(state) {
            ((state.side === 'left') ? (state.otherFlagsLeft.burned = !state.otherFlagsLeft.burned) : (state.otherFlagsRight.burned = !state.otherFlagsRight.burned))
        },
        updateMinimize(state) {
            ((state.side === 'left') ? (state.otherFlagsLeft.minimize = !state.otherFlagsLeft.minimize) : (state.otherFlagsRight.minimize = !state.otherFlagsRight.minimize))
        },
        updateDig(state) {
            ((state.side === 'left') ? (state.otherFlagsLeft.dig = !state.otherFlagsLeft.dig) : (state.otherFlagsRight.dig = !state.otherFlagsRight.dig))
        },
        updateDive(state) {
            ((state.side === 'left') ? (state.otherFlagsLeft.dive = !state.otherFlagsLeft.dive) : (state.otherFlagsRight.dive = !state.otherFlagsRight.dive))
        },
        updateReflect(state) {
            ((state.side === 'left') ? (state.otherFlagsLeft.reflect = !state.otherFlagsLeft.reflect) : (state.otherFlagsRight.reflect = !state.otherFlagsRight.reflect))
        },
        updateLightScreen(state) {
            ((state.side === 'left') ? (state.otherFlagsLeft.lightscreen = !state.otherFlagsLeft.lightscreen) : (state.otherFlagsRight.lightscreen = !state.otherFlagsRight.lightscreen))
        },
        updateAuroraVeil(state) {
            ((state.side === 'left') ? (state.otherFlagsLeft.auroraveil = !state.otherFlagsLeft.auroraveil) : (state.otherFlagsRight.auroraveil = !state.otherFlagsRight.auroraveil))
        }
    }
})

export const {updateCriticalHit, updateBurned, updateDig, updateDive, updateMinimize, updateReflect, updateLightScreen, updateAuroraVeil, updateSide} = otherFlagsSlice.actions

export default otherFlagsSlice.reducer