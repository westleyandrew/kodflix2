import React from 'react';
import { Link } from 'react-router-dom';

export default function Show(props) {
  return (
    <Link to={`/${props.id}`} className='item'>
      <img src={props.img} alt={props.name} />
      <div>
        <h1 className='overlay'>{props.name}</h1>
      </div>
    </Link >
  )
}