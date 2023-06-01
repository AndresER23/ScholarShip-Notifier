import express from 'express'
import { getAllAvailablesScholarShips } from '../services/scholarShipsService.js'
const router = express.Router()

router.get('/', async (req, res) => {
  await getAllAvailablesScholarShips((error, data) => {
    if (error) {
      res.json(error)
    }
    res.status = 200
    res.contentType = 'application/json'
    res.json(data)
  })
})

export default router
