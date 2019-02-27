const sql = require('mssql')
const config = {
  user: 'sa2',
  password: 'abc123',
  server: '127.0.0.1',
  database: 'bancotestes'
}

const poolPromise = new sql.ConnectionPool(config)
  .connect()
  .then(pool => {
    console.log('Connected to MSSQL...')
    return pool
  })
  .catch(err => console.log('Database Connection Failed! Bad Config: ', err))

module.exports = {
  sql, poolPromise
}
