import mysqlConn from '../../db/connection.js'

export function sendNotification (id, callback) {
  mysqlConn.query(`SELECT * FROM scrapped_scholarships WHERE id_scholarship=${id}`, (err, res) => {
    console.log(res[0])
    if (err) {
      console.log(err)
      callback(err)
    }
    callback(res)
  })
}
