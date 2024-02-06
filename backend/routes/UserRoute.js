const express =require('express');
const router = express.Router();
const {signupSchema} = require('./zod')
const jwt = require('jsonwebtoken');
const {JWT_SECRET} = require('../config');
const { User } = require('../db/database');


router.post('/signup',async (req,res)=>{
    const userObj = {
        username:req.body.username,
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        password:req.body.password
    }
    const parsedData = signupSchema.safeParse(userObj);

    if(!parsedData.success){
        res.status(411).json({
            message: "Email already taken / Incorrect inputs"
        })
    }
    const userExist = await User.findOne({username:req.body.username});
    
    if(userExist){
        return res.status(411).json({
            message: "Email already taken / Incorrect inputs"
        })
    }
    
    const user = await User.create(parsedData.data);
    const userId = user._id;

    const token =jwt.sign({userId},JWT_SECRET);
    res.json({
        message:"User Created Successfully",
        token:token
    })

})
router.post('/signin',(req,res)=>{
    
})


module.exports=router;