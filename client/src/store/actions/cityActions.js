export const FETCH_CITIES_PENDING = 'FETCH_CITIES_PENDING';
export const FETCH_CITIES_SUCCESS = 'FETCH_CITIES_SUCCESS';
export const FETCH_CITIES_ERROR = 'FETCH_CITIES_ERROR';

function fetchCitiesPending() {
    return {
        type: FETCH_CITIES_PENDING
    }
}

function fetchCitiesSuccess(products) {
    return {
        type: FETCH_CITIES_SUCCESS,
        products: products
    }
}

function fetchCitiesError(error) {
    return {
        type: FETCH_CITIES_ERROR,
        error: error
    }
}