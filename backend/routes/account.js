const express=require("express");
const { authMiddleware } = require("../middlewares");
const { Account, Users } = require("../db");
const accRouter=express.Router();

accRouter.get("/balance",authMiddleware,async(req,res)=>{

    const accDetails=await Account.findOne({
        userId:req.userId
    })
    res.json({
        balance:accDetails.balance

    })


})
accRouter.post("/transfer",authMiddleware,async(req,res)=>{
        const {to,amount}=req.body
        const user2=await Account.findOne(
           { userId:to}
        )
        if(!user2){
           return  res.status(404).json({
                msg:"User Doesn't Exist!!"
            })
        }

        const user1=await Account.findOne({userId:req.userID})
        if(!user1||!user1.balance>=amount){
           return  res.status(404).json({
                msg:"InSufficient Balance"
            })
        }
        await Account.updateOne({userId:req.userID},{$inc:{balance:-amount}})
        await Account.updateOne({userId:to},{$inc:{balance:+amount}})
        res.json({
            msg:"Transfer Succesful!!!"
        })
        


         


})

module.exports({
    accRouter
})