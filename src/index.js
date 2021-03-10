const express = require('express')
const data = require('../Student_Data.json')
var cors = require('cors')
const {v4: uuidv4} = require('uuid')
const app = express()
var bodyParser = require('body-parser')
const mongoose = require('mongoose')
// const uniqueValidator = require('mongoose-unique-validator');
require('dotenv').config()
const routes = require('./routes/v1')
const port = process.env.PORT || 4000;
app.use(cors())
app.use(bodyParser.json())

mongoose.connect(process.env.MONGODB_URL, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
 console.log('mongodb connected');
});


// app.get('/records',(req,res)=>{
//   try {
//     const id = req.query.id;
//   const record = uuidData.filter(i => i.id === id);
//   res.send(record)
//   // throw(e);

//   // addalert('kevin')
//   }
//     catch(e) {

//       // res.status(404).send(e)      
//       console.log(e)

//     }
// })


// app.get('/allrecords', (req, res) => {    
//      res.send(uuidData)
// })


// app.get('/dummykey', (req, res) => {    

//      if(process.env.NODE_ENV === 'production'){
//       res.send(process.env.DUMMY_VAR);
//      }
//      else{
//        res.send('local Dummy Key')

//      }
// })

// app.post('/newrecord',(req,res)=>{
//   let newObj ={
//     ...req.body,
//     id: uuidv4()
//   }
//   uuidData.push(newObj)
//   res.send('added')
// console.log(uuidData.length,'uuid length')

// })



// app.get('/', (req, res) => {
//   res.send(data)
// })

app.use('/v1',routes)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})