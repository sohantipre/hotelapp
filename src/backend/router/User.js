const express=require("express")
const router=new express.Router()
const User=require('../models/User')
const auth=require("../middleware/auth")

router.post("/user",async(req,res)=>{
    const user=new User({...req.body})
    try{
        await user.save()
        res.status(201).send(user)
    }catch(e){
        res.status(400).send(e)
    }
})

router.post("/user/login",async(req,res)=>{
  try{
const user=await User.findwhilelogin(req.body.email,req.body.password)
const token =await user.generateauthtoken()

res.send({token,user})}
  catch(e){
      res.status(400).send(e)
  }
})
router.post("/user/logout",async(req,res)=>{
try{
  req.user.tokens=req.user.tokens.filter((token)=>{
    return token.token!==req.token
  })
  await req.user.save()
  res.send()
}
catch(e){
  res.status(500).send(e)
}

})
router.get('/user/me',auth,async(req,res)=>{
  res.send(req.user)
})
router.get("/user/:id",async(req,res)=>{
    const _id = req.params.id;
    try {
      const user = await User.findById(_id);
      if (!user) {
        return res.status(404).send();
      }
      res.send(user);
    } catch (e) {
      res.status(500).send(e);
    }
})
router.patch("/user/me",async(req,res)=>{
const updates=Object.keys(req.body)
const possibleupdates=["email","password","userName"]
const isvalid=updates.every((update)=>possibleupdates.includes(update))
if(!isvalid){
  res.status(404).send('you are trying to do a invalid update!!')
}
try{
updates.forEach((update)=>req.user[update]=req.body[update])
await req.user.save()
res.send(req.user)

}catch(e){
  res.status(500).send(e)
}


})

router.delete("/users/me",async(req,res)=>{
    try{
    await User.findByIdAndDelete(req.user._id)
    res.send(req.user)}
    catch(e){
        res.status(400).send()

    }

})
module.exports=router