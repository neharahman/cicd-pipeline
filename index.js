const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.send('I am base route')
})

app.get('/home',(req,res)=>{
    res.send('I am home route')
})

app.get('/about',(req,res)=>{
    res.send('I am about route')
})

app.listen(3000,()=>{
    console.log('listen to the server')
})