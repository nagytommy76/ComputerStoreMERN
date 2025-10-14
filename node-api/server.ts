import express, { Application } from 'express'
require('dotenv').config()
import connectDB from './config/db'
const bodyParser = require('body-parser')
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app: Application = express()
const PORT = process.env.PORT || 5050

connectDB().then(() => {
   app.listen(PORT, () => {
      console.log(`The app started: ${PORT}`)
   })
})

app.use(
   cors({
      credentials: true,
      origin: [
         'http://localhost:3000',
         'http://localhost:8080',
         'https://computerstorebackend.firebaseapp.com',
         'https://computer-store-frontend-phi.vercel.app',
      ],
   })
)
app.use(cookieParser())
app.use(bodyParser.json())

app.use('/api/admin', require('./routes/api/Admin/Admin'))
app.use('/api/vga', require('./routes/api/Vga/Vga'))
app.use('/api/admin/vga', require('./routes/api/Admin/Vga/Vga'))

app.use('/api/auth', require('./routes/api/User/User'))
app.use('/api/cart', require('./routes/api/User/Cart'))
app.use('/api/order', require('./routes/api/User/Order'))
app.use('/api/admin/users', require('./routes/api/Admin/Users/Users'))

app.use('/api/admin/cpu', require('./routes/api/Admin/Cpu/Cpu'))
app.use('/api/cpu', require('./routes/api/Cpu/Cpu'))

app.use('/api/admin/memory', require('./routes/api/Admin/Memory/Memory'))
app.use('/api/memory', require('./routes/api/Memory/Memory'))

app.use('/api/admin/hdd', require('./routes/api/Admin/HDD/HDD'))
app.use('/api/hdd', require('./routes/api/HDD/HDD'))

app.use('/api/admin/ssd', require('./routes/api/Admin/SSD/SSD'))
app.use('/api/ssd', require('./routes/api/SSD/SSD'))

app.use('/api/highlight', require('./routes/api/Highlight/Highlight'))
