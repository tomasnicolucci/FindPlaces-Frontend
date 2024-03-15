const URL_PLACES = 'http://localhost:3004/places';

export const getPlaces = (state) => {
    return fetch(URL_PLACES)
    .then(response => {
        return response.json();
    })
    .then(data => {
        return state(data);
    })
    .catch(error => {
        console.log(error);
    })
}

export const getPlaceById = (id) => {
    return fetch(URL_PLACES + `/${id}`)
    .then(response => {
        return response.json();
    })
    .then(data => {
        return data;
    })
    .catch(error => {
        console.log(error);
    })
}

export const postPlace = (req) => {
    return fetch(URL_PLACES, req)
    .then(response => {
        return response.json();
    })
    .catch(error => {
        console.log(error);
    })
}

export const deletePlace = (id, req) => {
    return fetch(URL_PLACES + '/' + id, req)
    .then(response => {
        return response.json();
    })
    .catch(error => {
        console.log(error);
    })
}