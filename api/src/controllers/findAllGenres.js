const {Genre} = require('../db.js')

const findAllGenres = async ()=>{
    const genres = await Genre.findAll();
    return genres
}


module.exports = findAllGenres