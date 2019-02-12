import React, { Component } from 'react';
import logo from './logo.svg';
import Compte from './compteur';
import Timing from './timing';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
       <Compte/>
       <Timing/>
      </div>
    );
  }
}

export default App;
