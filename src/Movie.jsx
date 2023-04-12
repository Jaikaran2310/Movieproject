import React from "react";
import "./Movie.css";
import Movies from "./component/Movies";
import data from "./data.json";
export const Movie = () => {
  return (
    <div className="background">
      <div className="main">
        {data.map((element) => {
          return (
            <Movies
              Title={element.Title}
              Duration={element.Duration}
              Year={element.Year}
              img={element.img}
            />
          );
        })}
      </div>
    </div>
  );
};
