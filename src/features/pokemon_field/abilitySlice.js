import {createSlice} from "@reduxjs/toolkit";
import {fetchPkmnData} from "./pokemonSlice";

const initialState = {
    abilitiesLeft: [],
    abilitiesRight: [],
    side: 'left'
}

export const abilitySlice = createSlice({
    name: 'abilities',
    initialState,
    reducers: {
        updateSide(state, action) {
            state.side = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPkmnData.fulfilled, (state, action) => {
            if (state.side === 'left') {
                state.abilitiesLeft = action.payload.abilities
            }
            if (state.side === 'right') {
                state.abilitiesRight = action.payload.abilities
            }
        })
    }
})

export const {updateSide} = abilitySlice.actions

export default abilitySlice.reducer