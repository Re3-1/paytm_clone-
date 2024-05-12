const express=require("express");
const { authMiddleware } = require("../middlewares");
const { Account, Users } = require("../db");
const { default: mongoose } = require("mongoose");
const accRouter=express.Router();

accRouter.use(express.json())
accRouter.get("/balance",authMiddleware,async(req,res)=>{

    const accDetails=await Account.findOne({
        userId:req.userID

    })
    
    
    res.json({
        balance:accDetails.balance

    })


})
accRouter.post("/transfer",authMiddleware,async(req,res)=>{
    console.log(req.body.to)
        const {to,amount}=req.body
        
        const session=await mongoose.startSession();
        await session.startTransaction();
        const user2=await Account.findOne(
           { userId:to}
        ).session(session)
        if(!user2){
            await session.abortTransaction();
           return  res.status(404).json({
                
                msg:"User Doesn't Exist!!"
            })
        }

        const user1=await Account.findOne({userId:req.userID}).session(session)
        if(!user1||user1.balance<amount){
            await session.abortTransaction();
           return  res.status(404).json({
           
                msg:"InSufficient Balance"
            })
        }
        await Account.updateOne({userId:req.userID},{$inc:{balance:-amount}}).session(session)
        await Account.updateOne({userId:to},{$inc:{balance:+amount}}).session(session)


        await session.commitTransaction()
       await session.endSession
        res.json({
            msg:"Transfer Succesful!!!"
        })
        


         


})

module.exports=
    accRouter
