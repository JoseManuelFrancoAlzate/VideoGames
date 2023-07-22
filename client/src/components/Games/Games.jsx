import React,{useEffect,useState} from 'react'
import {useParams} from "react-router-dom"
import {oneGame} from '../funciones/funciones'
import styled from './Games.module.css'
const Games = ()=>{
  const [games, setGames] =useState(null)

  const params = useParams()

  useEffect(()=>{
    oneGame(params.id, setGames)
  },[])

 
    return (
   <div className={styled.card}  >
   {games !== null ? (   <center>
        <div >
          <figure>
           
    <h3>{params.id}</h3>   
    <h1>{games.name}</h1>
    
    <img src={games.background_image} alt="" width="400px" height="400px"/>
    <h1 className={styled.styledTitulo}>Platforms</h1>
    <h2> {games.platforms[0].platform.name}</h2>
    <h2> {games.platforms[1].platform.name}</h2>
    <h2> {games.platforms[2].platform.name}</h2>
  
<h1>Description</h1>
<h10>{games.description}</h10>
<h2>Released:</h2>
<h3>{games.released}</h3>

<h2>Rating</h2>
<h3>{games.rating}</h3>

<h2>Genres</h2>
<h3>{games.genres[0].name}</h3>
<h3>{games.genres[1].name}</h3>

</figure>

<table>
  hola
</table>
        </div>
        </center>) : <img src='https://i.gifer.com/M99a.gif' alt="" width="400px" height="200px" />}
   </div>  
      );
}

export default Games



/*
ID.
Nombre.
Imagen.
Plataformas.
Descripción.
Fecha de lanzamiento.
Rating.
Géneros.
*/ 

//games.platforms[0].platform.name