require('dotenv').config()

const express = require('express')// importing express module
const app = express()  // aopp
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/insta',(req,res)=>{
    res.send('harshavardhan_m username');
})

app.get('/login',(req,res)=>{
   res.send('<h1>Login to harshasbackend</h1>')
})
app.get('/youtubestudio', (req,res)=>{
    res.send('<h2>harsha youtube channel</h2>')
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})