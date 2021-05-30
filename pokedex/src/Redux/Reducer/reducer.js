import { GET_DATA_SUCCESS, GET_TYPES_SUCCESS, GET_POKEMON_PROPS_SUCCESS, TOGGLE_FETCHING_TYPE } from '../Actions/actions';

let initialState = {
    pokemons: [],
    types: [],
    currentPokemon: null,
    isFetching: true
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DATA_SUCCESS:
            return {
                ...state,
                pokemons: [...state.pokemons, ...action.payload]
            }
        case GET_TYPES_SUCCESS:
            return {
                ...state,
                types: [...state.types, {
                    id: action.payload.id,
                    types: action.payload.types
                }]
            }
        case GET_POKEMON_PROPS_SUCCESS:
            return {
                ...state,
                currentPokemon: action.payload
            }
        case TOGGLE_FETCHING_TYPE:
            return {
                ...state,
                isFetching: action.payload
            }
        default: return state;
    }
}