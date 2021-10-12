/*
  REST (represetational state transfer)
  gitignore.io
  Development dependencies:
  npm i nodemon eslint eslint-config-prettier eslint-plugin-prettier prettier -D
*/
require('dotenv').config()

const express = require('express');
const routerApi = require('./routes');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json())

routerApi(app)


app.get('/', (req, res) => res.send('Home page'));

app.get('/new-route', (req, res)=> res.send('Hello from another route'))



// app.get('/users', (req, res)=> {
//   return res.json({
//     users: [
//       {
//         name: 'Juan',
//         lastName: 'Perez',
//         age: 30
//       },
//       {
//         name: 'Pedro',
//         lastName: 'Perez',
//         age: 30
//       },
//       {
//         name: 'Juan',
//         lastName: 'Perez',
//         age: 30
//       },
//       {
//         name: 'Pedro',
//         lastName: 'Perez',
//         age: 30
//       },
//       {
//         name: 'Juan',
//         lastName: 'Perez',
//         age: 30
//       },
//       {
//         name: 'Pedro',
//         lastName: 'Perez',
//         age: 30
//       },
//       {
//         name: 'Juan',
//         lastName: 'Perez',
//         age: 30
//       },
//       {
//         name: 'Pedro',
//         lastName: 'Perez',
//         age: 30
//       },
//       {
//         name: 'Juan',
//         lastName: 'Perez',
//         age: 30
//       },
//       {
//         name: 'Pedro',
//         lastName: 'Perez',
//         age: 30
//       },
//       {
//         name: 'Juan',
//         lastName: 'Perez',
//         age: 30
//       },
//       {
//         name: 'Pedro',
//         lastName: 'Perez',
//         age: 30
//       },
//       {
//         name: 'Juan',
//         lastName: 'Perez',
//         age: 30
//       },
//       {
//         name: 'Pedro',
//         lastName: 'Perez',
//         age: 30
//       },
//       {
//         name: 'Juan',
//         lastName: 'Perez',
//         age: 30
//       },
//       {
//         name: 'Pedro',
//         lastName: 'Perez',
//         age: 30
//       },
//       {
//         name: 'Juan',
//         lastName: 'Perez',
//         age: 30
//       },
//     ]
//   })
// })


app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});

