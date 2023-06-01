import express from 'express'
import scholarShipsRouter from './routes/scholarships.js'
const app = express()

app.use(express.json())

app.use('/api/scholarships', scholarShipsRouter)

const PORT = 3600
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
