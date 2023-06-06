import express from 'express'
import { sendNotification } from '../services/notifierService.js'
const router = express.Router()

router.post('/newScholarShip', async (req, res) => {
  const id = req.body.id
  sendNotification(id, (error, data) => {
    if (error) {
      res.send('Hubo un error enviando la notificacion')
    }
    res.send(JSON.stringify(data))
  })
})

export default router
