import express, { Application } from 'express'
require('dotenv').config()
import fs from 'fs'
import connectDB from './config/db'
import morgan from 'morgan'
import path from 'path'
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

const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })

app.use(
   cors({
      credentials: true,
      origin: [
         'http://localhost:3000',
         'http://localhost:8080',
         'https://computerstorebackend.firebaseapp.com',
         'https://computerstorebackend.web.app/',
      ],
   })
)
app.use(cookieParser())
app.use(morgan('combined', { stream: accessLogStream }))
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
