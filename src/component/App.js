import React, { Component } from 'react';
import 'bootstrap';
import Router from '../Router';
import Navigation from '../Navigation';

class App extends Component {

  render () {
    return (
      <div>
        <Navigation />
        <Router />
      </div>
    )
  }
}

export default App;