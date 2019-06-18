import React from 'react';
import './App.css';
import Header from '../app/components/Header/Header.js';
import Main from '../app/components/Main/Main.js'
import Footer from '../app/components/Footer/Footer.js';
import posts from '../shared/posts.js';
import Post from '../entities/Post';

class App extends React.Component {
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
    console.log(this.loadPosts());
    return (
      <>
        <Header />
        <Main listOfPosts={this.loadPosts()} />
        <Footer />
      </>
    )

  }
}

export default App;
