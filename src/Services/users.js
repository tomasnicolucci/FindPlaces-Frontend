const URL_USERS = 'http://localhost:3004/users';

export const postUser = (req) => {
    return fetch(URL_USERS, req)
    .then(response => {
        return response.json();
    })
    .catch(error => {
        console.log(error);
    })
}

export const loginUser = (req) => {
    return fetch(URL_USERS + '/login', req)
    .then(response => {
        return response.json();
    })
    .catch(error => {
        console.log(error);
    })
}

export const addFavorite = (id, req) => {
    return fetch(URL_USERS + '/addFavorite/' + id, req) //cambiar url
    .then(response => {
        return response.json();
    })
    .catch(error => {
        console.log(error);
    })
}

export const addVisited = (id, req) => {
    return fetch(URL_USERS + '/addVisited/' + id, req) //cambiar url
    .then(response => {
        return response.json();
    })
    .catch(error => {
        console.log(error);
    })
}

export const getAllFavorites = (state, req) => {
    return fetch(URL_USERS + '/favs/all', req)
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