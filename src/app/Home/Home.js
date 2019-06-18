import React from 'react';
import Post from '../../entities/Post.js';
import posts from '../../shared/posts.js';
import PostList from '../posts/PostList/PostList.js';

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.listOfPosts = this.loadPosts();
    }

    loadPosts() {
        return posts.map(post => {
            return new Post(post);
        });
    }

    render() {
        return (
            <>
                <h2 className="center-align">Posts</h2>
                <PostList listOfPosts={this.listOfPosts} />
            </>
        )
    }
}

export default Home;