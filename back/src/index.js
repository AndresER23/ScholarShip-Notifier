import express from 'express'
import scholarShipsRouter from './routes/scholarships.js'
import notifierRouter from './routes/notifier.js'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())

const ALLOW_CORS_DIRECTION = 'http://localhost:3000'
app.use(cors({
  origin: ALLOW_CORS_DIRECTION
}))

app.use('/api/scholarships', scholarShipsRouter)
app.use('/api/notifier', notifierRouter)
const PORT = 3600
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
