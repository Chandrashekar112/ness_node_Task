const express =require("express");
const mongoose=require("mongoose");
const bodyParser=require("body-parser");


const app=express();
const port=7000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/",(req:any,res:any)=>{
    res.send("Hellow, welcome to Node.js with TypeScropt");

})


let db='mongoodb://localhost:27017/Server';

mongoose.connect(db,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>console.log("Connected to mongodb"))
.catch((err:any)=>{console.log(`unable to connect to database ${err}`)})


const featuresRouters =require("./routes/features");
app.get('/featurs',featuresRouters)

app.listen(port,()=>{
    console.log("server is a Listing on port 3000");
})


