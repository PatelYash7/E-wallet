const express =require('express');
const router = express.Router();
const {signupSchema,signinSchema,updateBody} = require('./zod')
const jwt = require('jsonwebtoken');
const {JWT_SECRET} = require('../config');
const { User } = require('../db/database');
const {authMiddleware} = require('../middleware/middleware');


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
router.post('/signin',async (req,res)=>{
    const userObj= {
        username:req.body.username,
        password:req.body.username
    }
    const parsedData = signinSchema.safeParse(userObj);
    if(!parsedData.success){
        return res.status(411).json({
            message:"Incorrect Inputs"
        })
    }
    const user = await User.findOne(parsedData.data);
    if(!user){
        return res.status(411).json({
            message:"Error while Logging In"
        })
    }
    const token = jwt.sign({
        userId:user._id
    },JWT_SECRET);
    res.json({
        message:"User Logged In Successfully",
        token:token
    })
})

//Update User
router.put('/',authMiddleware,async(req,res)=>{
    const parsedData = updateBody.safeParse(req.body);
    if(!parsedData.success){
        return res.send(411).json({
            message:"Incorrect Inputs"
        })
    }
    try{
        const user = await User.findOneAndUpdate({ _id : req.userId},req.body);
        res.status(200).json({
            mes:"Success",
            user:user
        })
    }catch(err){
        console.log(err)
    }
})


module.exports=router;