const express = require('express')
const data = require('./Student_Data.json')
var cors = require('cors')
const {v4: uuidv4} = require('uuid')
const app = express()
const port = process.env.PORT || 4000;
app.use(cors())

const uuidData = data.map((i)=>{
  return {
     ...i,
     id: uuidv4()
  }
})

app.get('/records',(req,res)=>{
  const id = req.query.id;
  const record = uuidData.filter(i => i.id === id);
  res.send(record)
})


app.get('/allrecords', (req, res) => {    
     res.send(uuidData)
})


app.get('/dummykey', (req, res) => {    

     if(process.env.NODE_ENV === 'production'){
      res.send(process.env.DUMMY_KEY);
     }
     else{
       res.send('local Dummy Key')

     }
})


app.get('/', (req, res) => {
  res.send(data)
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})