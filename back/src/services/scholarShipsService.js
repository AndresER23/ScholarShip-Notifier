import mysqlConn from '../../db/connection.js'

export function getAllAvailablesScholarShips (callback) {
  mysqlConn.query('SELECT * FROM scrapped_scholarships WHERE state = 1', (err, res) => {
    if (err) {
      callback(err)
    }
    callback(res)
  })
}
