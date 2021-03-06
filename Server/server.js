const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const axios = require('axios')
const app = express()
const port =3001

app.listen(port,()=>{
  console.log("server is running on port")
})

app.use(cors(
  {
      origin: "*",
  }
))

app.use(bodyParser.urlencoded({extended: true}) )

app.get('/search/:id',(req,res)=>{
  console.log("called /search")
  axios('https://www.pexels.com/api/v3/search/suggestions/'+req.params.id)
  .then(function (response) {
    res.json(response.data.data.attributes);
  }).catch(function (error) {
    res.json({respone:404})
  });
})

