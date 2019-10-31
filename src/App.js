import React, { Component } from 'react';
import './App.css';
import matrix from './images/matrix.jpeg';
import big from './images/big.jpeg';
import captain from './images/captain.jpeg';
import deli from './images/deli.jpeg';
import guardians from './images/guardians.jpeg';
import res from './images/res.jpeg';


class App extends Component {
  render() {
    return (
      <div className='App'>
        <img src={matrix} alt='matrix' />
      </div>
    );
  }
}

export default App;
