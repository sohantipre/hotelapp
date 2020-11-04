const express=require("express")
const router=new express.Router()

router.post("/user",async(req,res)=>{
    const user=new User({...req.body})
    try{
        user.save()
        res.status(201).send(user)
    }catch(e){
        res.status(400).send(e)
    }
})

router.post("/user/login",async(req,res)=>{
  try{const user=new User.findbylogin(req.body.email,req.body.password)
  res.send(user)}
  catch(e){
      res.status(400).send(e)
  }
  

})
router.post("/user/logout",async(req,res)=>{

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

})

router.delete("/users/me",async(req,res)=>{
    try{
    await User.findByIdAndDelete(req.user._id)
    res.send(req.user)}
    catch(e){
        res.status(400).send()

    }

})