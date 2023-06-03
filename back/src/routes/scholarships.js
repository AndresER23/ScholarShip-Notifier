import express from 'express'
import { getAllAvailablesScholarShips } from '../services/scholarShipsService.js'
const router = express.Router()

router.get('/', async (req, res) => {
  let responseSent = false

  await getAllAvailablesScholarShips((error, data) => {
    if (responseSent) {
      return // Evita ejecutar la lógica de respuesta si ya se ha enviado una respuesta
    }

    if (error) {
      res.status(500).json(error)
      responseSent = true
      return
    }

    res.status(200).json(data)
    responseSent = true
  })
})

export default router
