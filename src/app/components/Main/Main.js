import React from 'react';
import Home from '../../Home/Home.js'

const Main = (props) => {
    const { listOfPosts } = props;
    return (
        <main className="container">

            <Home listOfPosts={listOfPosts} />
        </main>
    )
}

export default Main;