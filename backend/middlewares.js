const jwt=require("jsonwebtoken");
const JWT_SECRET = require("./config");

function authMiddleware(req,res,next){
    const aut=req.headers.authorization;
    if(!aut||!(aut.startsWith("Bearer "))){
      
        return res.status(403).json({
            msg:"Invalid Authorization"
        })
    }
    const values=aut.split(" ");
    const usToken=values[1];

    try{
        const user=jwt.verify(usToken,JWT_SECRET);
        
        console.log( user)
        req.userID=user.userId;
        
        next();
    }catch(err){
        return res.status(403).json({Msg:"INVALID TOKEN!!"})

    }


}
module.exports={ authMiddleware}
   
