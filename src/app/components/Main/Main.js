import React from 'react';
import PostList from '../../posts/PostList/PostList.js';
import AuthorsList from '../../Authors/AuthorsList/AuthorsList.js'

const Main = (props) => {
    const { listOfPosts, listOfAuthors } = props;
    return (
        <main className="container">
            {(window.location.pathname === '/authors') ?
                <AuthorsList listOfAuthors={listOfAuthors} /> :
                <PostList listOfPosts={listOfPosts} />
            }
        </main>
    )
}

export default Main;