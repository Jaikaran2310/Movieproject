import React from 'react';
import './App.css';
import { Rating } from 'flowbite-react';

function Movies({Tittle,Year,Duration,img}){
 
  return (
    <div className="Movie">
        <img className='pic' src={img} alt='pic' />
        <p><Rating>
  <Rating.Star />
  <Rating.Star />
  <Rating.Star />
  <Rating.Star />
  <Rating.Star filled={false} />
</Rating>{ Tittle }</p>
        <p>{ Duration }</p>
        <p>{ Year }</p>
      
       </div>
  )
} 



export default Movies                                                                                                             