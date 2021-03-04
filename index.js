const express = require('express')
const data = require('./Student_Data.json')
var cors = require('cors')
const app = express()
const port = 8080;
app.use(cors())


app.get('/', (req, res) => {
  res.send(data)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})