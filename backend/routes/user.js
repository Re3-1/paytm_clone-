const express=require("express")
const zod=require("zod");
const jwt=require("jsonwebtoken")
const  { authMiddleware }= require("../middlewares")
const { Users, Account } = require("../db");
const JWT_SECRET = require("../config");

const uRouter=express.Router();

uRouter.user(express.json())
const updateBody=zod.object({
username:zod.string().optional(),
firstname:zod.string().optional(),
lastname:zod.string().optional()

})
const userSchema=zod.object({
    username:zod.string().min(3).max(30).trim().email().toLowerCase(),
    password:zod.string().min(6),
    firstname:zod.string(),
    lastname:zod.string()

})

uRouter.post("/signup",async(req,res)=>{
    const loginInfo=req.body;
    try{
    userSchema.parse(loginInfo)
}catch(err){
     return res.json({
        message:"Invalid Input!!!"
    })
}

    
    const existingUser=await Users.findOne({username: loginInfo.username})
    if(existingUser._id){
            
           return  res.json({
                msg:"Username Already taken!!"
            })

    }
    
    const token=jwt.sign({
        userId:dbUser._id
    },JWT_SECRET)

    await Account.create(
       { userId:dbUser._id,
        balance:1+Math.random()*1000
    }
    )

    res.json({
        msg:"User Created Succesfully",
        token
    })


})
const signinZod=zod.object({
    username:zod.string().email(),
    password:zod.string().min(3).max(30),

})


uRouter.post("signin",async(req,res)=>{
    const {success}=signinZod.safeParse(req.body)
    if(!success){
        return res.status(411).json({
            msg:"Invalid Input"
        })
    }
     const user=await Users.findOne({
        username:req.body.username,
        password:req.body.password
        
     })
     if(!user){
        return res.status(404).json({msg:"User Not Found!"});
     }
     const token=jwt.sign({userId:user._id},JWT_SECRET)
     res.json({
        token
     })


})


uRouter.put("/",authMiddleware,async(req, res)=>{
        try{
            updateBody.safeParse(req.body);
            
        }catch(err){
            return res.status(411).json({
                msg:"Wrong Inputs"
            })
        }
        const {userId}=req;
     
        Users.updateOne(req.body,{
            id:userId
        })

        res.json({msg:"Updated Successfully"})
});


uRouter.get("/bulk",authMiddleware,async(req,res)=>{
        const param=req.query.filter;
        try{
            const allSimilar=await Users.find({
            $or:[{firstname:{"$regex":param}},{lastname:{"$regex":param}}]  })
            res.json({
                user:allSimilar.map(user=>({
                    username:user.username,
                    firstname:user.firstname,
                    lastname:user.lastname,
                    _id:user.id
                }))
            })
            
    
    }catch(err){
            res.json({msg:"Something Went Wrong!"})
        }
       
      
       
})
module.exports=uRouter;