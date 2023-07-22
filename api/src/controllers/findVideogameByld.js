const {Videogame,Genre} = require("../db")

const findAllVideogameById = async (id)=>{
    const videogame = await Videogame.findByPk(id,{
        include: {
            model: Genre,
            attributes: ['name'],
            through: {
                attributes:[]
            },
        }
    });
    if(!videogame) throw Error('Personahe no existe')
    return videogame
}


module.exports = findAllVideogameById  