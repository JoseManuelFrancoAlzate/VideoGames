import {React,useEffect, useState} from 'react'
import styled from './Home.module.css'
import {allGames} from "../funciones/funciones"
import ApiLocal from '../ApiLocal/ApiLocal'
import Paginacion from '../Paginacion/Paginacion'
const Home = ()=>{

  const [games,setGames]= useState(null)
const [busqueda,setBusqueda]= useState(null)

const [pagina,setPagina] = useState(1)
const [porPagina, setPorPagina] = useState(2)

const maximo = games / porPagina

console.log(maximo)

  const handleChange=e=>{
    setBusqueda(e.target.value);
filtrar(e.target.value)
  }


const filtrar=(terminoBusqueda)=>{
  var resultadoBusqueda=games.filter((elemento)=>{
    if(elemento.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())){
      return elemento;
    }
  })
  setGames(resultadoBusqueda);
}

useEffect(()=>{
  allGames(setGames)
},[])



    return (
      <center>
        <div className={styled.homeHeader}>
        <Paginacion pagina={pagina} setPagina={setPagina} maximo={maximo}/>

<div>
  <input className={styled.searchB} value={busqueda}
    placeholder='busqueda por nombre'
    onChange={handleChange}/>
     <a href={`/home`}>
    <button className={styled.botones}>Reiniciar</button>
    </a>
</div>


     {games !== null ?  (  
   games
   .slice((pagina - 1) * porPagina,
   (pagina-1) * porPagina + porPagina)
   .map(
    games=>(
      <a href={`/detailpagegames/${games.id}`}>
    <div  className={styled.card} style={{width:'14rem'}} key={games.id}>
      <figure>
      <div className={styled.cardLogo}>
<img className={styled.imgCss} src={games.background_image} alt="" width="150px" height='150px'/>
</div>

    <div className={styled.cardContent}>
 <h5  className={styled.LetraCards}>{games.name}</h5>
<h5 className={styled.LetraCardss}>{games.genres[0].name}</h5>

</div>
</figure>

    </div>
    </a>
    
   )
   )
  )
     : <div>
      
      <img src='https://thumbs.gfycat.com/OnlyLastGoosefish-size_restricted.gif'/>
      </div>}

      <p>
<ApiLocal params={handleChange} pagina={pagina} porPagina={porPagina}/>
</p> 
      <div>
</div>
        </div>
        </center>
        
      );
}

export default Home