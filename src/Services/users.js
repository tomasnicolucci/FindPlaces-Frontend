export const postUser = (req) => {
    return fetch('http://localhost:3004/users', req)
    .then(response => {
        return response.json();
    })
    .catch(error => {
        console.log(error);
    })
}