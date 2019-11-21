export const FETCH_ALL_CITIES = 'FETCH_ALL_CITIES';

function fetchAllCities(cities) {
    return {
        type: FETCH_ALL_CITIES,
        cities: cities
    }
}

export const getAllCities = () => dispatch => {
        return fetch('http://172.16.127.35:5000/cities/all')
            .then(res => res.json())
            .then(res => dispatch(fetchAllCities(res)))
            .catch(error => console.log(error));
}
