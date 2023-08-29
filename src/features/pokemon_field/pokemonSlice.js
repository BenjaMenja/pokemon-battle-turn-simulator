import {createAsyncThunk, createSelector, createSlice} from "@reduxjs/toolkit";
import {uppercaseFormat} from "../../utils/utilities";
import axios from "axios";
import {fetchItemData} from "../items/itemSlice";

const initialState = {
    PokemonValuesLeft: {
        name: '',
        spriteData: '',
        level: 1,
        HP: 0,
        attack: 0,
        defense: 0,
        spatk: 0,
        spdef: 0,
        speed: 0,
        type: '',
        type2: '',
        ability: '',
        item: '',
        nature: '',
        isCriticalHit: false,
        burned: false,
        currentHP: 0,
        maxHP: 0
    },
    PokemonValuesRight: {
        name: '',
        spriteData: '',
        level: 1,
        HP: 0,
        attack: 0,
        defense: 0,
        spatk: 0,
        spdef: 0,
        speed: 0,
        type: '',
        type2: '',
        ability: '',
        item: '',
        nature: '',
        isCriticalHit: false,
        burned: false,
        currentHP: 0,
        maxHP: 0
    },
    loading: false,
    side: 'left'
}

const selectEvSlice = state => state.evs
const selectIvSlice = state => state.ivs
const selectPokemonSlice = state => state.pokemon

export const selectMaxHPLeft = createSelector([selectEvSlice, selectIvSlice, selectPokemonSlice], (selectEvSlice, selectIvSlice, selectPokemonSlice) => {
    return (Math.floor(((2 * selectPokemonSlice.PokemonValuesLeft.HP + selectIvSlice.IVsLeft.HP + Math.floor(selectEvSlice.EVsLeft.HP / 4)) * selectPokemonSlice.PokemonValuesLeft.level) / 100) + selectPokemonSlice.PokemonValuesLeft.level + 10)

})

export const selectMaxHPRight = createSelector([selectEvSlice, selectIvSlice, selectPokemonSlice], (selectEvSlice, selectIvSlice, selectPokemonSlice) => {
    return (Math.floor(((2 * selectPokemonSlice.PokemonValuesRight.HP + selectIvSlice.IVsRight.HP + Math.floor(selectEvSlice.EVsRight.HP / 4)) * selectPokemonSlice.PokemonValuesRight.level) / 100) + selectPokemonSlice.PokemonValuesRight.level + 10)
})

export const fetchPkmnData = createAsyncThunk(
    'pokemon/fetchPokemon',
    (pkmnname) => {
        return axios.get("https://pokeapi.co/api/v2/pokemon/" + pkmnname).then((response) => response.data)
    }
)

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchPkmnData.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchPkmnData.fulfilled, (state, action) => {
            state.loading = false
            if (state.side === 'left') {
                state.PokemonValuesLeft.name = uppercaseFormat(action.payload.name)
                state.PokemonValuesLeft.spriteData = action.payload.sprites.front_default
                state.PokemonValuesLeft.HP = action.payload.stats[0].base_stat
                state.PokemonValuesLeft.attack = action.payload.stats[1].base_stat
                state.PokemonValuesLeft.defense = action.payload.stats[2].base_stat
                state.PokemonValuesLeft.spatk = action.payload.stats[3].base_stat
                state.PokemonValuesLeft.spdef = action.payload.stats[4].base_stat
                state.PokemonValuesLeft.speed = action.payload.stats[5].base_stat
                state.PokemonValuesLeft.type = action.payload.types[0].type.name
                if (action.payload.types.length === 2) {
                    state.PokemonValuesLeft.type2 = action.payload.types[1].type.name
                }
                state.PokemonValuesLeft.ability = action.payload.abilities[0].ability.name
            }
            if (state.side === 'right') {
                state.PokemonValuesRight.name = uppercaseFormat(action.payload.name)
                state.PokemonValuesRight.spriteData = action.payload.sprites.front_default
                state.PokemonValuesRight.HP = action.payload.stats[0].base_stat
                state.PokemonValuesRight.attack = action.payload.stats[1].base_stat
                state.PokemonValuesRight.defense = action.payload.stats[2].base_stat
                state.PokemonValuesRight.spatk = action.payload.stats[3].base_stat
                state.PokemonValuesRight.spdef = action.payload.stats[4].base_stat
                state.PokemonValuesRight.speed = action.payload.stats[5].base_stat
                state.PokemonValuesRight.type = action.payload.types[0].type.name
                if (action.payload.types.length === 2) {
                    state.PokemonValuesRight.type2 = action.payload.types[1].type.name
                }
                state.PokemonValuesRight.ability = action.payload.abilities[0].ability.name
            }
        })
        builder.addCase(fetchPkmnData.rejected, (state, action) => {
            if (state.side === 'left') {
                state.PokemonValuesLeft.name = ''
                state.PokemonValuesLeft.spriteData = ''
                state.PokemonValuesLeft.HP = 0
                state.PokemonValuesLeft.attack = 0
                state.PokemonValuesLeft.defense = 0
                state.PokemonValuesLeft.spatk = 0
                state.PokemonValuesLeft.spdef = 0
                state.PokemonValuesLeft.speed = 0
                state.PokemonValuesLeft.type = ''
                state.PokemonValuesLeft.type2 = ''
                state.PokemonValuesLeft.ability = ''
            }
            if (state.side === 'right') {
                state.PokemonValuesRight.name = ''
                state.PokemonValuesRight.spriteData = ''
                state.PokemonValuesRight.HP = 0
                state.PokemonValuesRight.attack = 0
                state.PokemonValuesRight.defense = 0
                state.PokemonValuesRight.spatk = 0
                state.PokemonValuesRight.spdef = 0
                state.PokemonValuesRight.speed = 0
                state.PokemonValuesRight.type = ''
                state.PokemonValuesRight.type2 = ''
                state.PokemonValuesRight.ability = ''
            }
            window.alert("Error, Pokemon not found.")
        })
        builder.addCase(fetchItemData.fulfilled, (state, action) => {
            if (state.side === 'left') {
                state.PokemonValuesLeft.item = uppercaseFormat(action.payload.name)
            }
            if (state.side === 'right') {
                state.PokemonValuesRight.item = uppercaseFormat(action.payload.name)
            }
        })
    },
    reducers: {
        updateSide(state, action) {
            state.side = action.payload
        },
        updateHP(state, action) {
            if (state.side === 'left') {
                state.PokemonValuesLeft.currentHP = action.payload
            }
            if (state.side === 'right') {
                state.PokemonValuesRight.currentHP = action.payload
            }
        },
        updateAbility(state, action) {
            if (state.side === 'left') {
                state.PokemonValuesLeft.ability = action.payload
            }
            if (state.side === 'right') {
                state.PokemonValuesRight.ability = action.payload
            }
        },
        updateNature(state, action) {
            if (state.side === 'left') {
                state.PokemonValuesLeft.nature = action.payload
            }
            if (state.side === 'right') {
                state.PokemonValuesRight.nature = action.payload
            }
        }
    }
})
export const {updateSide, updateHP, updateAbility, updateNature} = pokemonSlice.actions

export default pokemonSlice.reducer