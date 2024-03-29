import {configureStore} from "@reduxjs/toolkit";
import pokemonReducer from './features/pokemon_field/pokemonSlice'
import statChangeReducer from './features/stats/statChangeSlice'
import evsReducer from './features/stats/evSlice'
import ivsReducer from './features/stats/ivSlice'
import moveFieldReducer from './features/moves/moveFieldSlice'
import abilityReducer from './features/pokemon_field/abilitySlice'
import itemReducer from './features/items/itemSlice'
import flagsReducer from './features/pokemon_field/otherFlagsSlice'
import environmentReducer from './features/environment/environmentSlice'
import {composeWithDevTools} from "@redux-devtools/extension";
import thunk from 'redux-thunk'

export const store = configureStore({
    reducer: {
        pokemon: pokemonReducer,
        statChanges: statChangeReducer,
        evs: evsReducer,
        ivs: ivsReducer,
        moveField: moveFieldReducer,
        abilities: abilityReducer,
        items: itemReducer,
        otherFlags: flagsReducer,
        environment: environmentReducer,
        middleware: [thunk, composeWithDevTools]
    }
})