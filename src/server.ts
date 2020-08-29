import 'reflect-metadata'
import express from 'express'
import routes from './routes'
import './database'

const app = express()
app.use(express.json())
const PORT = 3333

app.use(routes)

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}...`)
})
