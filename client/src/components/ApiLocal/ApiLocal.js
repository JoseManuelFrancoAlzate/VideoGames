import {React,useEffect, useState} from 'react'
import { localGames } from '../funciones/funciones'
import styled from './ApiLocal.module.css'
const ApiLocal = ({handle,pagina, porPagina})=>{

    const [games,setGames]= useState(null)
  
 

    useEffect(()=>{
    localGames(setGames)
    },[])
  
    return (
        <center>

        <div className={styled.homeHeader}>

     {games !== null ? 
   games
   .slice((pagina - 1) * porPagina,
   (pagina-1) * porPagina + porPagina)
   .map(
    games=>(
      <a href={`/detailpagelocalgames/${games.id}`}>
    <div  className={styled.card} style={{width:'14rem'}} key={games.id}>
      <figure>
      <div className={styled.cardLogo}>
    <img className={styled.imgCss} src={games.image} alt="" width="150px" height='150px'/>
</div>

    <div className={styled.cardContent}>
 <h5  className={styled.LetraCards}>{games.name}</h5>
<h5 className={styled.LetraCardss}>{games.Genres[0].name}</h5>

</div>

</figure>


    </div>
    </a>
   ))
     : <div>
      
      <img src='https://thumbs.gfycat.com/OnlyLastGoosefish-size_restricted.gif'/>
      </div>}
      
        </div>
        </center>
        
    )
}

export default ApiLocal