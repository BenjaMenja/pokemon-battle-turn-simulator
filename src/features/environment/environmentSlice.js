import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    weather: '',
    terrain: ''
}

export const environmentSlice = createSlice({
    name: 'environment',
    initialState,
    reducers: {
        updateWeather(state, action) {
            state.weather = action.payload
        },
        updateTerrain(state, action) {
            state.terrain = action.payload
        }
    }
})

export const {updateWeather, updateTerrain} = environmentSlice.actions

export default environmentSlice.reducer