import React from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';
import Header from '../app/components/Header/Header.js';
import Home from '../app/Home/Home.js';
import About from '../app/About/About.js';
import PostSingle from '../app/posts/PostSingle/PostSingle.js';
import Authors from '../app/Authors/Authors.js';
import Footer from '../app/components/Footer/Footer.js';
import Main from './components/Main/Main';

class App extends React.Component {
  constructor(props) {
    super(props);


  }

  render() {
    return (
      <>
        <Header />
        <Main>
          <Switch>
            <Route path="/posts/:id" component={PostSingle} />
            <Route path="/about" component={About} />
            <Route path="/authors" component={Authors} />
            <Route path="/" component={Home} />
          </Switch>
        </Main>
        <Footer />
      </>
    )

  }
}

export default App;
