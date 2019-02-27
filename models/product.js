const { poolPromise } = require('../db')

const getAll = async() => {
  const pool = await poolPromise
  const rs = await pool
              .request()
              .query('select * from products')
  return rs.recordset
}

module.exports = {
  getAll
}
