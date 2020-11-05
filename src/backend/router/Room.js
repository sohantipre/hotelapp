const express=require("express")
const router=new express.Router()
const Room=require("../models/Room")

router.post("/room",async(req,res)=>{
    const room= new Room({...req.body})
    try{
        await room.save()
        res.status(201).send(room)
    }
    catch(e){
        res.status(400).send(e)

    }

})
router.get("/room",async(req,res)=>{
  
  res.send(room)
})
router.get("/room/:id",async(req,res)=>{
    const _id=req.params.id
   try{ const room=await Room.findById(_id)
    if(!room){
       return res.status(404).send()

    }
    res.status(201).send()}
    catch(e){
        res.status(500).send()
    }
})
router.delete("/room/:id",async(req,res)=>{
    try{ const room=await Room.findById(req.params.id)
    if(!room){
       return res.status(404).send()
    }
     res.status(201).send(room)
    }catch(e){
        res.status(500).send(e)
    }
})

module.exports=router