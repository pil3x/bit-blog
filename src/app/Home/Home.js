import React from 'react';
// import PostList from '../posts/PostList/PostList';
import Post from '../../entities/Post.js';
import Main from '../components/Main/Main.js';
import posts from '../../shared/posts.js';

class Home extends React.Component {
    constructor(props) {
        super(props);

    }

    loadPosts() {
        const allPosts = posts;
        return allPosts.map(post => {
            return new Post(post)
        });
    }

    render() {
        return (
            <>
                <h2 className="center-align">Posts</h2>
                <Main listOfPosts={this.loadPosts()} />
            </>
        )
    }
}

export default Home;