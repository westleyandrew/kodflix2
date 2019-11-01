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
            <div>
              <h1 className='overlay'>The Big Lebowski</h1>
            </div>
          </div>
          <div className='item'>
            <img src={captain} alt='captain' />
            <div>
              <h1 className='overlay'>Captain America</h1>
            </div>
          </div>
          <div className='item'>
            <img src={deli} alt='deli' />
            <div>
              <h1 className='overlay'>Delicatessen</h1>
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='item'>
            <img src={guardians} alt='guardians' />
            <div>
              <h1 className='overlay'>Guardians of the Galaxy</h1>
            </div>
          </div>
          <div className='item'>
            <img src={matrix} alt='matrix' />
            <div>
              <h1 className='overlay'>The Matrix</h1>
            </div>
          </div>
          <div className='item'>
            <img src={res} alt='res' />
            <div>
              <h1 className='overlay'>Reservoir Dogs</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
