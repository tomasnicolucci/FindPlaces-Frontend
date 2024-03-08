export const postUser = (req) => {
    return fetch('http://localhost:3004/users', req)
    .then(response => {
        return response.json();
    })
    .catch(error => {
        console.log(error);
    })
}

export const loginUser = async (req) => {
    try {
        const response = await fetch('http://localhost:3004/users/login', req);
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
    }
}

export const addFavorite = (id, req) => {
    return fetch('http://localhost:3004/users/addFavorite/' + id, req)
    .then(response => {
        return response.json();
    })
    .catch(error => {
        console.log(error);
    })
}

export const addVisited = (id, req) => {
    return fetch('http://localhost:3004/users/addVisited/' + id, req)
    .then(response => {
        return response.json();
    })
    .catch(error => {
        console.log(error);
    })
}