import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser'

import { connectDB } from './lib/connectDB.js'

import EstonianRouter from './routes/estonian.route.js'
import HebrewRouter from './routes/hebrew.route.js'
import UserRouter from './routes/user.route.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5015

app.use(cookieParser())

app.use(cors({ 
  origin: ['http://localhost:5173', 'http://localhost:5174'], // this is supposed to be your frontend URL
  credentials: true,
  methods: 'GET,POST,PUT,DELETE',
  allowedHeaders: 'Content-Type,Authorization'
})) // this is the backend localhost, not frontend

//app.use(express.json());
app.use(express.json({ type: 'application/json', limit: '10mb' }));


app.use((req, res, next) => { // middleware
    console.log(`--You made a ${req.method} request to ${req.path}`)
    console.log(`--User-Agent: ${req.headers['user-agent']}`);
    next()
})

app.use('/api/estonian', EstonianRouter)
app.use('/api/hebrew', HebrewRouter)

app.use('/api/user', UserRouter)

app.listen(PORT, () => {
  connectDB();
  console.log("The PolyLang server is running on PORT ", PORT)
})