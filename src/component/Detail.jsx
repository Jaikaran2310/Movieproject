import React, {useState,useEffect } from 'react'
import './Detail.css'
import ReactStars from 'react-stars'
import { useParams } from 'react-router-dom'
import {db } from './firebase/firebase'
import{doc} from 'firebase/firestore'
import { getDoc } from 'firebase/firestore'


const Detail = () => {
  const {id} = useParams();
  const[data,setData] = useState({
    Title: "",
    Year: "",
    img: "",
    Description: ""

  }); 
  useEffect(() => {
    async function getData(){
        const _doc= doc(db, "movies", id);
        const _data = await getDoc(_doc);
    setData(_data.data())
    }
    getData();
  },[id])
  
    return (
     
    <div className='detail'>
      <img className='imgg' src={data.img} alt='Movie img'/>
      <div className='data'>
        
        <h1 className='h11'>{data.Title} </h1>
        <h3 className='ss'>{data.Year}</h3>
        <ReactStars
        size={20}
        half={true}
        value={4.5}
        edit={true}/>
        <p className='pp'>{data.Description}</p>

         </div>
    </div>
     
  )
}

export default Detail
