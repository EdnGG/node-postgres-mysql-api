const { Client } = require('pg')

async function getConnection() {
  const client = new Client({
    user: 'postgres',
    password: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'my_store'
  })
  await client().connect()
  return client
}

module.exports = getConnection
