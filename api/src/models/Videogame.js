const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => { 
  // defino el modelo
  sequelize.define('Videogame', {
    id :{
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
      
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }, 
    description: {
 type: DataTypes.STRING
    },
    platform :{
      type: DataTypes.STRING
    },
    image: {
      type : DataTypes.STRING
    },
    releaseData: {
      type: DataTypes.DATEONLY
    },
    rating: {
      type: DataTypes.INTEGER
    },

  },
  {
    timestamps:false
  });
}; 

/*
{
"name": "Super mario bros",
"description": "El juego describe las aventuras de los hermanos Mario y Luigi,En esta ocasión ambos deben rescatar a la Princesa Peach que fue secuestrada por el rey de los Koopas, Bowser",
"platform":"Nintendo Entertainment System",
"image": "https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/virtual_console_nintendo_3ds_7/SI_3DSVC_SuperMarioBros.jpg",
"releaseData": "1985-09-13",
"rating": "95",
"genres":[1,2]
},
 {
"name": "sonic the hedgehog", 
"description": "El objetivo de este juego de acción es juntar anillos, rec +ompensas, que le permitirán al personaje obtener mejoras para su juego y para desbloquear otros personajes",
"platform":"Sega Mega Drive/Genesis",
"image": "https://www.eltiempo.com/files/image_640_428/files/crop/uploads/2019/05/02/5ccb2009945ee.r_1556816012268.0-200-2352-1376.jpeg",
"releaseData": "1991-06-23", 
"rating": "88",
"genres":[1,3]
}, 
{
"name": "crash bandicoot",
"description": "un juego de plataformas en el que el jugador controla al personaje titular Crash, que tiene la tarea de atravesar 32 niveles para derrotar al Doctor Neo Cortex y rescatar a Tawna",
"platform":"Play Station",
"image": "https://upload.wikimedia.org/wikipedia/en/4/44/Crash_Bandicoot_Cover.png",
"releaseData": "1996-04-12​",
"rating": "92",  
"genres":[1,2]
}, 
{
  "name":" ",
"description": "",
platform: "",
"image": "",
"releaseData": "",
"rating": "",
"genres":[]
}
*/  