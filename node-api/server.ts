import express, { Application } from 'express'
require('dotenv').config()
import connectDB from './config/db'
const bodyParser = require('body-parser')
const cors = require('cors')

import { engine } from 'express-handlebars'

const app: Application = express()
const PORT = process.env.PORT || 5050

connectDB().then(() => {
   app.listen(PORT, () => {
      console.log(`The app started: ${PORT}`)
   })
})
// Email testing purposes
app.engine('hbs', engine({ defaultLayout: 'main.hbs', layoutsDir: './views/email/' }))
app.set('view engine', 'hbs')
app.set('views', './views/email')

app.get('/', (req, res) => {
   res.render('Register')
})
// Email testing purposes

app.use(cors({ origin: 'http://localhost:3000', methods: 'GET,HEAD,PUT,PATCH,POST,DELETE' }))
app.use(bodyParser.json())

app.use('/api/vga', require('./routes/api/Vga/Vga'))
app.use('/api/admin/vga', require('./routes/api/Admin/Vga/Vga'))

app.use('/api/auth', require('./routes/api/User/User'))
app.use('/api/cart', require('./routes/api/User/Cart'))
app.use('/api/order', require('./routes/api/User/Order'))

app.use('/api/admin/cpu', require('./routes/api/Admin/Cpu/Cpu'))
app.use('/api/cpu', require('./routes/api/Cpu/Cpu'))
