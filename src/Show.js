import React from 'react';

export default function Show(props) {
    return (
      <div className='item'>
        <img src={props.img} alt={props.name} />
        <div>
          <h1 className='overlay'>{props.name}</h1>
        </div>
      </div>)
  }