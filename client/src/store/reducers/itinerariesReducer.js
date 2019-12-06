import { FETCH_ALL_ITINERARIES } from '../actions/itinerariesActions'

const initialState = {
    itinerariesArray: []
}

export function itinerariesReducer(state = initialState, action){
    switch(action.type){
        case FETCH_ALL_ITINERARIES:
            return Object.assign({}, state, { itinerariesArray: action.itineraries })
        default:
            return state;
    }
}

export default itinerariesReducer;
