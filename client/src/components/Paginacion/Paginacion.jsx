import React from 'react'
import {useState} from 'react'

 const Paginacion =({pagina,setPagina, maximo})=>{

    const [input, setInput]= useState(1)

const nextPage = ()=>{
    setInput(input + 1);
    setPagina(pagina + 1)
}   

const previousPage = ()=>{
    setInput(input - 1);
    setPagina(pagina - 1)
}   

    return(
        <div>
            <p>
            <button onClick={previousPage}>←</button>
            <input name='page' autoComplete='off' value={input} type='text'/>
            
            <button onClick={nextPage}>→</button>
            <p>de {maximo}</p>
            </p>
        </div>
    )
}

export default Paginacion   

