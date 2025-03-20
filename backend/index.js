import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

import { connectDB } from './db/connectDB.js'

import EstonianRouter from './routes/estonian.route.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5015

app.use(cors({ origin: 'http://localhost:5015', credentials: true })) // this is the backend localhost, not frontend

app.use((req, res, next) => { // middleware
    console.log(`You made a ${req.method} request to ${req.path}`)
    next()
})

app.get('/', (req, res) => {
  res.send("This is your first route in PolyLang.")
})

app.use('/estonian', EstonianRouter)

app.listen(PORT, () => {
  connectDB();
  console.log("The PolyLang server is running on PORT ", PORT)
})