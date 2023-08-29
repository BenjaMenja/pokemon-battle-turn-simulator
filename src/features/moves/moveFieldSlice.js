import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {fetchPkmnData} from "../pokemon_field/pokemonSlice";
import axios from "axios";
import {uppercaseFormat} from "../../utils/utilities";

const initialState = {
    moveListLeft: [],
    moveListRight: [],
    movePropertiesLeft: {
        power: 0,
        accuracy: 0,
        type: '',
        category: '',
        name: ''
    },
    movePropertiesRight: {
        power: 0,
        accuracy: 0,
        type: '',
        category: '',
        name: ''
    },
    side: 'left',
    loading: false
}

export const fetchMoveData = createAsyncThunk(
    'moveField/fetchMove',
    (moveName) => {
        return axios.get("https://pokeapi.co/api/v2/move/" + moveName + "/").then((response) => response.data)
    }
)

export const moveFieldSlice = createSlice({
    name: 'moveField',
    initialState,
    reducers: {
        updateMoveList(state, action) {
          if (state.side === 'left') {
              state.moveListLeft = action.payload
          }
          if (state.side === 'right') {
              state.moveListRight = action.payload
          }
        },
        updateSide(state, action) {
            state.side = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPkmnData.fulfilled, (state, action) => {
            if (state.side === 'left') {
                state.moveListLeft = action.payload.moves
            }
            if (state.side === 'right') {
                state.moveListRight = action.payload.moves
            }
        })
        builder.addCase(fetchMoveData.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchMoveData.fulfilled, (state, action) => {
            state.loading = false
            if (state.side === 'left') {
                if (action.payload.power === null) state.movePropertiesLeft.power = 0
                else state.movePropertiesLeft.power = action.payload.power

                if (action.payload.accuracy === null) state.movePropertiesLeft.accuracy = 0
                else state.movePropertiesLeft.accuracy = action.payload.accuracy

                state.movePropertiesLeft.type = action.payload.type.name
                state.movePropertiesLeft.category = action.payload.damage_class.name
                state.movePropertiesLeft.name = uppercaseFormat(action.payload.name)
            }
            if (state.side === 'right') {
                if (action.payload.power === null) state.movePropertiesRight.power = 0
                else state.movePropertiesRight.power = action.payload.power

                if (action.payload.accuracy === null) state.movePropertiesRight.accuracy = 0
                else state.movePropertiesRight.accuracy = action.payload.accuracy

                state.movePropertiesRight.type = action.payload.type.name
                state.movePropertiesRight.category = action.payload.damage_class.name
                state.movePropertiesRight.name = uppercaseFormat(action.payload.name)
            }
        })
        builder.addCase(fetchMoveData.rejected, (state) => {
            state.loading = false
            if (state.side === 'left') {
                state.movePropertiesLeft.power = 0
                state.movePropertiesLeft.accuracy = 0
                state.movePropertiesLeft.type = ''
                state.movePropertiesLeft.name = ''
                state.movePropertiesLeft.category = ''
            }
            if (state.side === 'right') {
                state.movePropertiesRight.power = 0
                state.movePropertiesRight.accuracy = 0
                state.movePropertiesRight.type = ''
                state.movePropertiesRight.name = ''
                state.movePropertiesRight.category = ''
            }
            window.alert('Error: Move not found.')
        })
    }
})

export const {updateMoveList, updateSide} = moveFieldSlice.actions
export default moveFieldSlice.reducer