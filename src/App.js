import React, { Component } from 'react';
import Show from './Show';
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
          <Show name='The Big Lebowski' img={big}/>
          <Show name='Captain America' img={captain}/>
          <Show name='Delicatessen' img={deli}/>
        </div>  
        <div className='container'>
        <Show name='Guardians of the Galaxy' img={guardians}/>
          <Show name='The Matrix' img={matrix}/>
          <Show name='Reservoir Dogs' img={res}/>
        </div>
      </div>
    );
  }
}

export default App;
