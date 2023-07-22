const {Videogame, Genre} = require('../db.js')


const findAllVideogame = async (query) =>{
    const videoGames = await Videogame.findAll(
        {
            where: query,
include: {
    model: Genre,
    attributes: ['name'],
    through: {
        attributes:[]
    },
}

        }
    );
    return videoGames
}

module.exports = findAllVideogame;