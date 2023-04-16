import React from "react";
import "./Movies.css";
import ReactStars from 'react-stars'

function Movies({ Title, Year, Duration, img }) {
  return (
    <>
    <div className="Movie">
      <img className="pic" src={img} alt="pic" />
      <h1><ReactStars 
      size={20}
      half={true}
       edit={true}
       value={5}
      /></h1>
      <p>
        {Title}
      </p>
      <p>{Duration}</p>
      <p>{Year}</p>
    </div>
    </>
  );
}

export default Movies;
