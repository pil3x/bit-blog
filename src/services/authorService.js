import Author from '../entities/Author.js';
const axios = require('axios');


const fetchAuthors = () => {
    return axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => res.data)
        .then(data => {
            return data.map(post => {
                return new Author(post);
            })
        })
}

export { fetchAuthors }