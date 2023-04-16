import React from "react";
import "./Movie.css";
import Movies from "./component/Movies";
import {getDocs} from 'firebase/firestore'
import {moviesRef} from '../src/component/firebase/firebase';
import { useEffect, useState } from "react";

export const Movie = () => {
  const [data,setData] = useState([])
  useEffect(() => {
    async function getData(){
      const _data = await getDocs(moviesRef);
      _data.forEach((doc) => {
      setData((prv) => [...prv,doc.data()])
      })

    }
    getData()
  },[])
  return (
    <div className="background">
      <div className="main">
        {data.map((element) => {
          return (
            <Movies
            // key={element.ID}
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
