import React from 'react';
import PostList from '../posts/PostList/PostList';

const Home = (props) => {
    return (
        <>
            <h2 className="center-align">Posts</h2>
            <PostList listOfPosts={props.listOfPosts} />
        </>
    )
}

export default Home;