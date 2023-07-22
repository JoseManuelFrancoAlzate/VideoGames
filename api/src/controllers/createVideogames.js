const {Videogame} = require('../db.js')


const createVideogames = async({name,description,platform,image,releaseData,rating,genres})=>{

const newVideogame = await Videogame.create({name,description,platform,image,releaseData,rating }) 

newVideogame.addGenres(genres)

return newVideogame
}


module.exports= createVideogames 