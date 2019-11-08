import React from 'react';
import Show from './Show';
import getGallery from './gallery-get';

export default function Gallery() {
  return (
    <div>
      <div className='container'>
        {
          getGallery().map(show => (
            <Show 
            key={show.id}
            id={show.id} 
            name={show.name} 
            img={show.img} />
          ))
        }
      </div>
    </div>
  )
}