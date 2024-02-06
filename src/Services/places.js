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