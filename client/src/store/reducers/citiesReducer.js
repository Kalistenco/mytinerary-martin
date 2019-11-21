import { FETCH_ALL_CITIES } from '../actions/citiesActions'

const initialState = ""

export function citiesReducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_ALL_CITIES:
            return Object.assign({}, state, { citiesArray: action.cities })
        default:
            return state;
    }
}

export default citiesReducer;
