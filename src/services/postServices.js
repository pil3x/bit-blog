import Post from '../entities/Post';
const axios = require('axios');

const fetchPosts = () => {
    return axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.data)
        .then(data => {
            return data.map(post => {
                return new Post(post);
            })
        })
}


export { fetchPosts };
