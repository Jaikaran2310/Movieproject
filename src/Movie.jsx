import React from 'react'
import './index.css';
import Movies from './component/Movies';
export const Movie = () => {
  return (
    
    <div className='background'>
        <div className='main'>
 

  <Movies Tittle={" Name=Lion"}
        Year={"Year=2023"}
        Duration={"Duration=173"}
        img={"https://www.restova.co.tz/sites/default/files/styles/article_full_view/public/field/image/last_lions_xlg.jpg?itok=zmGX6Zz3"}/>
       
        <Movies Tittle={ "Title= Mowgli: Legend of the Jungle"}
        Year={"Year= 2018"}
        Duration={ "Runtime= 104 min"}
        img={"https://m.media-amazon.com/images/M/MV5BMjMzODc2NzU5MV5BMl5BanBnXkFtZTgwNTMwMTE3NjM@._V1_SX300.jpg"}
        />


        <Movies Tittle={ "Title= Doctor Strange"}
        Year={ "Year= 2016"}
        Duration={"Runtime= 115 min"}
        img={"https://stat5.bollywoodhungama.in/wp-content/uploads/2022/05/Box-Office-Doctor-Strange-in-the-Multiverse-of-Madness-opens-quite-well-as-predicted-will-have-a-touch-and-go-with-Rs.-100-Crore-Club-entry-over-the-weekend-1.jpg"}
        />
        
        <Movies Tittle={ "Title= John Wick"}
        Year={ "Year= 2014"}
        Duration={ "Runtime= 101 min"}
        img={"https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_SX300.jpg"}
        
         />

         <Movies Tittle={ "Title= Star Wars: Episode V - The Empire "}
         Year={"Year= 1980"}
         Duration={"Runtime= 160 min"}
         img={"https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"}
         />
         
         <Movies Tittle={"Title= Star Wars: Episode VI"}
         Year={"Year= 1983"}
         Duration={"Runtime= 120 min"}
         img={"https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"}
         />
         <Movies Tittle={"Title= Star Wars: Episode VI"}
         Year={"Year= 1983"}
         Duration={"Runtime= 120 min"}
         img={"https://images.unsplash.com/photo-1535016120720-40c646be5580?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"}
         />
         
         </div>
        </div>
   
  )
}
