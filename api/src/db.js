require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const VideoGamesFunction = require('./models/Videogame')
const GenreFunction = require('./models/Genres')
const {
  DB_USER, DB_PASSWORD, DB_HOST,
} = process.env;

const URL = `https://api.rawg.io/api/games?key=435f1d4454034841aee18c9d3e81494f`

//`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/videogames`

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/videogames`, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});
GenreFunction(sequelize)
VideoGamesFunction(sequelize)
const basename = path.basename(__filename);
 
const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { Videogame, Genre } = sequelize.models;


// Aca vendrian las relaciones
// Product.hasMany(Reviews);
Genre.belongsToMany(Videogame,{through:"GenreVideogame"});
Videogame.belongsToMany(Genre,{through:"GenreVideogame"});

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};
//clave de la api:
//435f1d4454034841aee18c9d3e81494f
//https://api.rawg.io/api/platforms?key=435f1d4454034841aee18c9d3e81494f