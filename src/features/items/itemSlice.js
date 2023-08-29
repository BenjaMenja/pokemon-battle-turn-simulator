import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {uppercaseFormat} from "../../utils/utilities";

const initialState = {
    itemLeft: {
        name: '',
        sprite: ''
    },
    itemRight: {
        name: '',
        sprite: ''
    },
    side: 'left',
    loading: false
}

export const fetchItemData = createAsyncThunk(
    'items/fetchItem',
    (itemName) => {
        return axios.get("https://pokeapi.co/api/v2/item/" + itemName + "/").then((response) => response.data)
    }
)

export const itemSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {
        updateSide(state, action) {
            state.side = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchItemData.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchItemData.fulfilled, (state, action) => {
            state.loading = false
            if (state.side === 'left') {
                state.itemLeft.name = uppercaseFormat(action.payload.name)
                state.itemLeft.sprite = action.payload.sprites.default
            }
            if (state.side === 'right') {
                state.itemRight.name = uppercaseFormat(action.payload.name)
                state.itemRight.sprite = action.payload.sprites.default
            }
        })
        builder.addCase(fetchItemData.rejected, (state) => {
            state.loading = false
            if (state.side === 'left') {
                state.itemLeft.name = ''
                state.itemLeft.sprite = ''
            }
            if (state.side === 'right') {
                state.itemRight.name = ''
                state.itemRight.sprite = ''
            }
        })
    }
})

export const {updateSide} = itemSlice.actions

export default itemSlice.reducer