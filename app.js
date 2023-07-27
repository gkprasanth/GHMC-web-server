const express=require("express");
const mongoose=require("mongoose");
const DATABASE_URL ="mongodb+srv://revanth9347569169:mokvpIzzEdxKm7bo@cluster0.itj1n1q.mongodb.net/?retryWrites=true&w=majority";
const router = require("./router/user-routes");
const cors =require('cors');
const app=express();


app.use(cors());
app.use(express.json());
app.use("/test",router);

mongoose.connect(DATABASE_URL 
).then(()=>{
    app.listen(5000);
    console.log("Database is conneted.Listening to PORT:5000");
})
.catch((err)=>{
    console.log(err);
})
