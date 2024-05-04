const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://ankitrawatre1:ankitre1@cluster0.llkynm4.mongodb.net/paytmApp");
const userSchema=mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true,
        minlength:3,
        maxlength:30
    },
    password:{
        type:String,
        required:true,
        minlength:6
    },
    firstname:{
        type:String,
        required:true,


    },
    lastname:{
        type:String,
        required:true,
        

    }
})
const Users=mongoose.model("Users",userSchema)
module.exports={
    Users
}