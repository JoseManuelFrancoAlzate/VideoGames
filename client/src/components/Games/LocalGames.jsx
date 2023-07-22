import {oneLocalGames} from '../funciones/funciones'
import React,{useEffect,useState} from 'react'
import {useParams} from "react-router-dom"
import styled from './Games.module.css'

const LocalGames = () =>{

    const [games, setGames] = useState(null)

    const params = useParams()

    useEffect(()=>{

        oneLocalGames(params.id, setGames)

    },[])

    return(
        <div className={styled.card}>
        {games !== null ? (   <center>
             <div>
         <h2> {params.id}</h2>   
         <h3> {games.name}</h3>
         <img src={games.image} alt="" width="500px" height="400px"></img>
          
    <h2> {games.platform}</h2>
   <h2>{games.description}</h2>
   <h2>{games.released}</h2>
   <h2>{games.rating}</h2>

   <h2>Genres</h2>
   <h3>{games.Genres[0].name}</h3>
   <h3>{games.Genres[1].name}</h3>

             </div>
             </center>) : <img src='https://i.gifer.com/M99a.gif' alt="" width="400px" height="200px"/>}
        </div>  
    )

}


export default LocalGames