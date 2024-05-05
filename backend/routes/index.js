const express = require("express");
const accRouter=require("./account")
const userRouter=require("./user")
const router=express.Router();

router.use("/user",userRouter)
router.use("/account",accRouter)

module.exports= router;