const {Genre} = require('../db.js')



const createGenres = async(name,userId)=>{

    const newGenres = await Genre.create({name,userId})
     
    return newGenres
    }
    
    
    module.exports= createGenres