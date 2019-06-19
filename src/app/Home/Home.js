import React from 'react';

import Post from '../../entities/Post.js';
import posts from '../../shared/posts.js';
import PostList from '../posts/PostList/PostList.js';
import { fetchPosts } from '../../services/postServices.js'

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: []
        }
    }

    loadPosts() {
        fetchPosts()
            .then(posts => this.setState({ posts: posts }))
    }

    componentDidMount() {
        this.loadPosts();
    }

    render() {
        return (
            <>
                <h2 className="center-align">Posts</h2>
                <PostList listOfPosts={this.state.posts} />
            </>
        )
    }
}

export default Home;