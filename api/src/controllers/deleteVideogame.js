const {Videogame} = require("../db")


const deleteVideogame =async (id)=>{
    const videogame = await Videogame.findByPk(id)
    const aux= {...videogame}
await videogame.destroy()
return aux
}

module.exports = deleteVideogame