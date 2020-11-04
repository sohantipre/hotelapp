const express=require("express")
const app=express()

const userrouter=require("./router/User")
const roomrouter=require("./router/Room")

app.use(userrouter)
app.use(roomrouter)

