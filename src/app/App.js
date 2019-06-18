import React from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';
import Header from '../app/components/Header/Header.js';
import Home from '../app/Home/Home.js';
import About from '../app/About/About.js';
import Authors from '../app/Authors/Authors.js';
import Footer from '../app/components/Footer/Footer.js';

class App extends React.Component {
  constructor(props) {
    super(props);


  }

  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/authors" component={Authors} />
          <Route path="/" component={Home} />
        </Switch>
        <Footer />
      </>
    )

  }
}

export default App;
