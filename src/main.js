const express = require('express')
const app = express()
app.use((req, res, next)=> {
  console.log(res.query)
})
app.listen(3000, ()=> {  
    console.log('start')
})