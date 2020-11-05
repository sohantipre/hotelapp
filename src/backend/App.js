const express=require("express")
const app=express()
require('./db/mongoose')

const userrouter=require("./router/User")
const roomrouter=require("./router/Room")

app.use(express.json())
app.use(userrouter)
app.use(roomrouter)

app.listen(3000,()=>{
  console.log('server is up and running!')
})

