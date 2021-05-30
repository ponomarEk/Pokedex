export const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS';
export const GET_TYPES_SUCCESS = 'GET_TYPES_SUCCESS';
export const GET_POKEMON_PROPS_SUCCESS = 'GET_POKEMON_PROPS_SUCCESS';
export const TOGGLE_FETCHING_TYPE = 'TOGGLE_FETCHING_TYPE';

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
            setTimeout(()=> {
                dispatch(toggleFetchingType(false));
                dispatch(getDataSuccess(payload));
            },1500);
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

const toggleFetchingType = (newValue) => {
    return {
        type: TOGGLE_FETCHING_TYPE,
        payload: newValue
    }
}
