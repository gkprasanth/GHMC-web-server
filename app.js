const express=require("express");
const mongoose=require("mongoose");
const DATABASE_URL="mongodb+srv://revanth9347569169:mokvpIzzEdxKm7bo@cluster0.itj1n1q.mongodb.net/?retryWrites=true&w=majority";
const router = require("./router/user-routes");
const cookieParser= require('cookie-parser');
const cors =require('cors');
require('dotenv').config();
const app=express();
const {test1}=require("./cronjobs/profilejob");
// const cron =require('node-cron');

app.use(cors({credentials:true,origin:"http://localhost:3000"}));
app.use(cookieParser());
app.use(express.json());
app.use("/test",router);


// const test1 = cron.schedule('* * * * *',()=>
// {
//     console.log('running a task everyminute')
// });

// test1.start();//crojob start

mongoose.connect(DATABASE_URL 
).then(()=>{
    app.listen(5000);
    console.log("Database is conneted.Listening to PORT:5000");
})
.catch((err)=>{
    console.log(err);
})
