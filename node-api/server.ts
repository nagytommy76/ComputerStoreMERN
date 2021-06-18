import express, { Application } from 'express'
const app: Application = express()
const port = 3000

app.get('/', (req, res) => {
   res.send('<h1>Ez az első NODE appom. LoL :)</h1>')
})

app.listen(port, () => {
   console.log(`The app listening at http://localhost:${port}`)
})
