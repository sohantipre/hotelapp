const jwt=require('jsonwebtoken')
const User=require('../models/User')

const auth=(req,res,next)=>{
try{
const token=req.header("Authorization").replace("Bearer ","")

const decoded=jwt.verify(token,'hotelappbro!')

const user=User.findOne({
    _id:decoded._id,
    "tokens.token":token

})
if(!user){
    throw new Error()
}
req.token=token
req.user=user
next()
}catch(e){
res.status(401).send({err:"please authenticate"})
}
}
module.exports=auth


