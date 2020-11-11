const express=require("express")
const app=express()
require('./db/mongoose')
const CORS =require('cors')
const bodyparser=require('body-parser')

const userrouter=require("./router/User")
const roomrouter=require("./router/Room")

app.use(CORS())
app.use(bodyparser.json())

// app.use(express.json())
app.use(userrouter)
app.use(roomrouter)

app.listen(5000,()=>{
  console.log('server is up and running!')
})

