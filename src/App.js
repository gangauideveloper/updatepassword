import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Update from './Update';
class App extends Component {
  render() {
    return (
      <div className="App">
      	<Home/>    
      	<Update/>  	
      </div>
    );
  }
}

export default App;
