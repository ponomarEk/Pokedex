export const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS';
export const GET_TYPES_SUCCESS = 'GET_TYPES_SUCCESS';
export const GET_POKEMON_PROPS_SUCCESS = 'GET_POKEMON_PROPS_SUCCESS';
export const CLEAR_TYPES_ARRAY = 'CLEAR_TYPES_ARRAY';

const axios = require('axios');

const getDataSuccess = (newValue) => {
    return {
        type: GET_DATA_SUCCESS,
        payload: newValue
    }
}

export const getData = (url) => {
    return dispatch => {
        axios.get(url).then(resp => {
            const payload = resp.data.results;
            dispatch(getDataSuccess(payload));
        });
    }
}

const getTypesSuccess = (newValue) => {
    return {
        type: GET_TYPES_SUCCESS,
        payload: newValue
    }
}

export const getTypes = (url) => {
    return dispatch => {
        axios.get(url).then(resp => {
            const payload = resp.data;
            dispatch(getTypesSuccess(payload))
        })
    }
}
const getPokemonPropsSuccess = (newValue) => {
    return {
        type: GET_POKEMON_PROPS_SUCCESS,
        payload: newValue
    }
}

export const getPokemonProps = (url) => {
    return dispatch => {
        axios.get(url).then(resp => {
            const payload = resp.data;
            dispatch(getPokemonPropsSuccess(payload))
        })
    }
}

export const clearTypesArray = () => {
    return {
        type: CLEAR_TYPES_ARRAY
    }
}
