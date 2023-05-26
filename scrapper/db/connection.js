import { createConnection } from 'mysql'

const mysqlConn = createConnection({
  host: 'localhost',
  user: 'sqluser',
  password: 'password',
  database: 'scholarship',
  port: '3306'
})

mysqlConn.connect((err) => {
  if (err) {
    throw err
  } else {
    console.log('Conexión a DB MYSQL exitosa')
  }
})

export default mysqlConn
