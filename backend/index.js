const express=require("express")
const cors=require("cors")
const app=express();

const mainRouter=require("./routes/index");





app.use("/api/v1",mainRouter);
app.use(express.json())





app.listen(3001,()=>{
    console.log("Server listening to 3001")
});