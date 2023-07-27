const express=require("express");
const{ register}=require("../controllers/profile-controllers")
const router=express.Router();

router.post("/post",register);


module.exports =router;