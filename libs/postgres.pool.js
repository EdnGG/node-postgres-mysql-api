const { Pool } = require('pg')
const { config }  = require('./../config/config')
// const pool = new Pool({})

const USER = encodeURIComponent(config.dbUser)
const PASSWORD = encodeURIComponent(config.dbPassword)

const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`

const pool = new Pool({ connectionString: URI })

// async function getConnection() {

  // const pool = new Pool({
  //   user: 'postgres',
  //   password: 'postgres',
  //   host: 'localhost',
  //   port: 5432,
  //   database: 'my_store'
  // })

  // pool.connect()
  // return pool
// }

module.exports = pool
