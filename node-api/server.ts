import express, { Application } from 'express'
require('dotenv').config()
const connectDB = require('./config/db')
const bodyParser = require('body-parser')
const cors = require('cors')

const app: Application = express()
const PORT = process.env.PORT || 5050

connectDB()
app.use(cors({ origin: 'http://localhost:3000', methods: 'GET,HEAD,PUT,PATCH,POST,DELETE' }))
app.use(bodyParser.json())
app.use('/api/vga', require('./routes/api/Vga/vga'))

app.listen(PORT, () => {
   console.log(`The app listening at http://localhost:${PORT}`)
})
