const express = require('express')
const data = require('./Student_Data.json')
var cors = require('cors')
const {v4: uuidv4} = require('uuid')
const app = express()
const port = process.env.PORT || 4000;
app.use(cors())


app.get('/', (req, res) => {
  res.send(data)
})
app.get('/allrecords', (req, res) => {
    const uuidData = data.map((i)=>{
        return {
           ...i,
           id: uuidv4()
        }
     })

     res.send(uuidData)
})


app.get('/allrecord/id',(req,res)=>{
  const id = req.query.id;
  const record = uuidData.find(i => i.id === id);
  res.send(record)
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})