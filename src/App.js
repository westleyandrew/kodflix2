import React, { Component } from 'react';
import './App.css';
import matrix from './images/matrix.jpg';
import big from './images/big.jpg';
import captain from './images/captain.jpg';
import deli from './images/deli.jpg';
import guardians from './images/guardians.jpg';
import res from './images/res.jpg';


class App extends Component {
  render() {
    return (
      <div className='App'>
        <br />
        <div className='container'>
          <div className='item'>
            <img src={big} alt='big' />
          </div>
          <div className='item'>
            <img src={captain} alt='captain' />
          </div>
          <div className='item'>
            <img src={deli} alt='deli' />
          </div>
        </div>
        <div className='container'>
          <div className='item'>
            <img src={guardians} alt='guardians' />
          </div>
          <div className='item'>
            <img src={matrix} alt='matrix' />
          </div>
          <div className='item'>
            <img src={res} alt='res' />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
