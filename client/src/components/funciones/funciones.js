import axios from 'axios'

const allGames = async (state)=>{
const peticion  = await axios.get('https://api.rawg.io/api/games?key=435f1d4454034841aee18c9d3e81494f')
state(peticion.data.results)

}

const oneGame =async (id, state)=>{
    const peticion  = await axios.get(`https://api.rawg.io/api/games/${id}?key=435f1d4454034841aee18c9d3e81494f`)
state(peticion.data)
}


const oneLocalGames =async (id, state)=>{
    const peticion  = await axios.get(`http://localhost:3001/videogame/${id}`)
state(peticion.data)
}

const localGames = async (state)=>{
    const peticion  = await axios.get('http://localhost:3001/videogame')
    state(peticion.data)
    
    }


export {allGames, oneGame, localGames, oneLocalGames}