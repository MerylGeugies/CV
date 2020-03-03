import React, { Component } from 'react';
//import { Brouwserrouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import './App.css';

class App extends Component {
  render() {
    return (

        <div className='App'>
          <Navbar />
        </div>
    );
  }
}

export default App;