import React from 'react';
import PostList from '../../posts/PostList/PostList.js';

const Main = (props) => {
    const { listOfPosts } = props;
    return (
        <main className="container">
            <PostList listOfPosts={listOfPosts} />
        </main>
    )
}

export default Main;