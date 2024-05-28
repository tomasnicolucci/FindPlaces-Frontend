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
    return fetch(URL_USERS + '/favs/add/' + id, req)
    .then(response => {
        return response.json();
    })
    .catch(error => {
        console.log(error);
    })
}

export const addVisited = (id, req) => {
    return fetch(URL_USERS + '/visited/add/' + id, req)
    .then(response => {
        return response.json();
    })
    .catch(error => {
        console.log(error);
    })
}

export const getAllFavorites = async (req) => {
    try {
        const response = await fetch(URL_USERS + '/favs/all', req);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
        return [{"vacio": "nada"}];
    }
}

export const getAllVisited = async (req) => {
    try {
        const response = await fetch(URL_USERS + '/visited/all', req);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
        return [];
    }
}
