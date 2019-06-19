import Post from '../entities/Post';
const axios = require('axios');


const fetchPosts = () => {
    return axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.data)
        .then(data => {
            console.log(data);
            return data.map(post => {
                return new Post(post);
            })
        })
}


const fetchPost = (postId) => {
    return axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(res => res.data)
        .then(data => {
            return new Post(data);
        })
}



export { fetchPosts, fetchPost };