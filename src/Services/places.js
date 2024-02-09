export const getPlaces = (state) => {
    return fetch('http://localhost:3004/places')
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
    return fetch(`http://localhost:3004/places/${id}`)
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