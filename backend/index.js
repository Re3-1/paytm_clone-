const express=require("express")
const cors=require("cors")
const app=express();

const mainRouter=require("./routes/index/");





app.use(bodyParser)
app.use("/api/v1",mainRouter);
app.use(express.json())





app.listen(3000);