const jwt=require("jsonwebtoken");
const JWT_SECRET = require("./config");

function authMiddleware(req,res,next){
    const aut=req.headers.authorization;
    if(!aut||!aut.startsWith("Bearer ")){
        res.status(403).json({
            msg:"Invalid Authorization"
        })
    }
    const values=aut.split(" ");
    const usToken=values[1];

    try{
        const user=jwt.verify(usToken,JWT_SECRET);
        req.userID=user.Id;
        next();
    }catch(err){
        res.status(403).json({Msg:"INVALID TOKEN!!"})

    }


}
module.exports={ authMiddleware}
   
