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

app.use('/api/vga', require('./routes/api/Vga/Vga'))
app.use('/api/admin/vga', require('./routes/api/Admin/Vga'))

app.use('/api/auth', require('./routes/api/User/User'))
app.use('/api/cart', require('./routes/api/User/Cart'))

app.listen(PORT, () => {
   console.log(`The app started`)
})
