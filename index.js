/*
  REST (represetational state transfer)
  gitignore.io
  Development dependencies:
  npm i nodemon eslint eslint-config-prettier eslint-plugin-prettier prettier -D
*/
require('dotenv').config()

const express = require('express');
const morgan = require('morgan')
const cors = require('cors')
const routerApi = require('./routes');

// Middlewares
const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler.js')

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
app.use(boomErrorHandler)
app.use(errorHandler)


app.get('/', (req, res) => res.send('Home page'));

app.get('/new-route', (req, res)=> res.send('Hello from another route'))


app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});

