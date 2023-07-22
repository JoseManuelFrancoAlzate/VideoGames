const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const routes = require('./routes/index.js');
//const {Genres, Videogame} = require('./db.js')
const findAllVideogames= require('./controllers/findAllVideogames')
const createVideogames = require('./controllers/createVideogames.js')
const createGenres = require('./controllers/createGenres.js')
const findAllGenres = require('./controllers/findAllGenres.js');
const findAllVideogameById = require('./controllers/findVideogameByld.js');
const deleteVideogame = require('./controllers/deleteVideogame.js')
require('./db.js');

const server = express();

server.name = 'API';
 
server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(express.json())
server.use(morgan('dev'));



server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});
server.use('/', routes);

// Error catching endware
server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

server.get('/videogame', async(req,res)=>{ 

const {name} = req.query;
  
  try {
  const videoGames = name 
  ?await findAllVideogames({name})
  :await findAllVideogames()
    res.status(200).json(videoGames)
  } catch (error) {
    res.status(500).json({error: error.message})
  }
})
 
server.post('/videogame', async (req,res)=>{
  try {
    const {name,description,platform,image,releaseData,rating, genres}= req.body;
  const newVideogames = await createVideogames({
    name,
    description,
    platform,
    image,
    releaseData,
    rating,
    genres
  });
  res.status(201).json(newVideogames)
  } catch (error) {
    res.status(500).json({error: error.message})
  }
  
})

server.get("/videogame/:id", async (req,res)=>{
  try {
    const {id} = req.params
const videogame = await findAllVideogameById(id)



res.status(200).json(videogame)
  } catch (error) {
    res.status(400).json({error:error.message})
  }

}
)

server.post('/genres', async(req,res)=>{
  try {
    const {name,userId} = req.body

    const newGenres = await createGenres(name, userId)

    res.status(201).json(newGenres)
  } catch (error) {
        res.status(500).json({error: error.message})

  }
})

server.get('/genres',async(req,res)=>{
  try {
    const genres = await findAllGenres()
    res.status(201).json(genres)
  } catch (error) {
    res.status(500).json({error: error.message}) 
  }
})



server.delete('/videogame/:id',async (req,res)=>{
  const {id}= req.params
try {

  const response=await deleteVideogame(id);
  res.status(200).json(response)
} catch (error) {
  res.status(400).json({error:error.message})
}
})








/*
server.post("/genres", async (req,res)=>{
  try {
    const {name, userId} = req.body;

const newGenres = await Genres.create({name, userId})

res.status(200).json(newGenres)
  } catch (error) {
    res.status(404).send(error.message)
  }

})


server.post("/videogame", async (req,res)=>{
  try {
    const {name, description,platform,image,releaseData,rating} = req.body;

const newVideogame = await Videogame.create({name,description,platform,image,releaseData,rating })

res.status(200).json(newVideogame)
  } catch (error) {
    res.status(404).send(error.message)
  } 

})


server.get('/videogame', async(req,res)=>{
  try {

    const {name} = req.query

    if(!name){
      const allVideogame = await Videogame.findAll()

    res.status(200).json(allVideogame)
    }
    else{
      const VideogamesByName = await Videogame.findAll({
where:{
  name
}
      })
      res.status(200).json(VideogamesByName)
    }

    
  } catch (error) {

    res.status(404).send(error.message)
    
  }
})


server.get('/videogame/:id', async(req,res)=>{

  try {

    const {id} = req.params


    const idVideogame = await  Videogame.findByPk(id)

    res.status(200).json(idVideogame)
  } catch (error) {
    res.status(404).send(error.message)
  }
})

server.delete('/videogame/:id', async(req, res)=>{

  try {
    const {id} = req.params

    const deleteVideogame = await Videogame.findByPk(id);
    deleteVideogame.destroy()
    
    res.status(200).json(deleteVideogame)
  } catch (error) {
    res.status(404).send(error.message)
  }

})

*/


module.exports = server