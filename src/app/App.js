import React from 'react';
import './App.css';
import Header from '../app/components/Header/Header.js';
import Main from '../app/components/Main/Main.js'
import Footer from '../app/components/Footer/Footer.js';

class App extends React.Component {
  constructor(props) {
    super(props);


  }

  render() {
    return (
      <>
        <Header />
        <Main />
        <Footer />
      </>
    )
  }
}

export default App;
