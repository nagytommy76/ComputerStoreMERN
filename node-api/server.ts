import express, { Application } from 'express'
require('dotenv').config()
const connectDB = require('./config/db')
const bodyParser = require('body-parser')

const app: Application = express()
const PORT = process.env.PORT || 5000

connectDB()
app.listen(PORT, () => {
   console.log(`The app listening at http://localhost:${PORT}`)
})

app.use(bodyParser.json())
app.use('/api/vga', require('./routes/api/vga'))
app.get('/', (req, res) => {
   res.send('<a href="http://localhost:5000/api/vga">VGA</a>')
})
