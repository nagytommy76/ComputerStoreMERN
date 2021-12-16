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
app.use('/api/admin/vga', require('./routes/api/Admin/Vga/Vga'))

app.use('/api/auth', require('./routes/api/User/User'))
app.use('/api/cart', require('./routes/api/User/Cart'))
app.use('/api/order', require('./routes/api/User/Order'))
app.use('/api/payment', require('./routes/api/Payment/Payment'))

app.use('/api/admin/cpu', require('./routes/api/Admin/Cpu/Cpu'))
app.use('/api/cpu', require('./routes/api/Cpu/Cpu'))

app.listen(PORT, () => {
   console.log(`The app started: ${PORT}`)
})
