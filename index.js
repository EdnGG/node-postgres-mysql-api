/*
  REST (represetational state transfer)
  gitignore.io
  Development dependencies:
  npm i nodemon eslint eslint-config-prettier eslint-plugin-prettier prettier -D
  docker: docker-compose up -d postgres
  docker: docker-compose up
  docker: docker-compose down
  docker: docker-compose ps
  docker-compose exec postgres bash <abrir un bash en terminal con postgres>
   <conectar a postgres>
  \d+ muestra todas las tablas
  \q salir de postgres
  exit para salir del contenedor de docker
  docker-compose up -d pgadmin <correr PGAdmin>
  docker-compose ps <ver estado de los contenedores>
  docker ps <ver estado de los contenedores 'container id'>
  docker inspect <ide del contenedor> buscamos la IP del contenedor


  172.19.0.3

*/

/**
 * ORM
Un ORM es un modelo de programación que permite mapear las estructuras de una base de datos relacionales.

.
Al abstraer este tipo de programación, delegamos su implementación al backend, es decir, le añadimos una de responsabilidad a la capa transaccional del servidor:
.
✨Los beneficios son los siguientes:

Acciones como CRUD (Create, Read, Update, Delete) son administradas mediante ORM.
La implementación de seeds o semillas, nos permiten recuperar, mediante código, la estructura de una BD.
.
Una de las bases teóricas para entender este modelo es mediante el conocimiento de DAO (Data Access Object) y DTO (Data Transfer Object), los cuales nos permiten desestructurar un ORM en módulos de abstracción para acceder a la DB y transferir datos desde la misma DB, respectivamente hablando.
.
Los contras sería:

Delegación de responsabilidades al server
Descentralización de trabajo, directa, de una BD.

SEQUELIZE:
npm i -S sequelize
npm i -S pg-hstore
 */

require('dotenv').config()

const express = require('express');
const morgan = require('morgan');
const cors = require('cors')
const routerApi = require('./routes');

// Middlewares
const { logErrors, errorHandler, boomErrorHandler, ormErrorHandler } = require('./middlewares/error.handler.js')

const app = express();
const port = process.env.PORT || 3000;

// const whitelist = ['http://localhost:8080', 'http://localhost:3000', 'http://localhost:5000']
// const corsOptions = {
//   origin: function (origin, callback) {
//     // if (whitelist.includes(origin) || !origin) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true)
//     } else {
//       callback(new Error('Not allowed by CORS'))
//     }
//   }
// }

// app.use(cors(corsOptions))

app.use(morgan('tiny'))
//'CORS' permite acceder a la app desde otro dominio
app.use(cors())
// 'express.json()', sirve para las respuestas
app.use(express.json())

routerApi(app)

app.use(logErrors)
app.use(ormErrorHandler)
app.use(boomErrorHandler)
app.use(errorHandler)


app.get('/', (req, res) => res.send('Home page'));

app.get('/new-route', (req, res)=> res.send('Hello from another route'))


app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});

