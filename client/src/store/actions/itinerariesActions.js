export const FETCH_ALL_ITINERARIES = 'FETCH_ALL_ITINERARIES'

function fetchAllItineraries(itineraries) {
    return {
        type: FETCH_ALL_ITINERARIES,
        itineraries: itineraries
    }
}

export const getAllItineraries = () => dispatch => {
    return fetch('http://172.16.127.35:5000/itineraries/all')
        .then(res => res.json())
        .then(res => dispatch(fetchAllItineraries(res)))
        .catch(error => console.log(error));

}