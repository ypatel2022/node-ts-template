import 'dotenv/config'
import express from 'express'
import cors from 'cors'

const app = express()
const port = 8000

app.use(cors())
// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

app.get('/', async (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
