import { createPool } from 'mysql2'

const mysqlConn = createPool({
  host: 'localhost',
  user: 'sqluser',
  password: 'password',
  database: 'scholarship',
  port: '3306'
})

mysqlConn.getConnection((err) => {
  if (err) {
    throw err
  } else {
    console.log('Conexión a DB MYSQL exitosa')
  }
})

export default mysqlConn
