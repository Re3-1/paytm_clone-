const express=require("express")
const zod=require("zod");
const jwt=require("jsonwebtoken")
const { Users } = require("../db");
const JWT_SECRET = require("../config");

const uRouter=express.Router();
const userSchema=zod.object({
    username:zod.string().min(3).max(30).trim().toLowerCase(),
    password:zod.string().min(6),
    firstname:zod.string(),
    lastname:zod.string()

})

uRouter.post("/Signup",async(req,res)=>{
    const loginInfo=req.body;
    try{
    userSchema.parse(loginInfo)
}catch(err){
    res.json({
        message:"Invalid Input!!!"
    })
}
    
    const existingUser=await Users.findOne({username: loginInfo.username})
    if(existingUser._id){
            
            res.json({
                msg:"Username Already taken!!"
            })

    }
    
    const token=jwt.sign({
        userId:dbUser._id
    },JWT_SECRET)

    res.json({
        msg:"User Created Succesfully",
        token
    })


})


uRouter.get("");
module.exports=uRouter;