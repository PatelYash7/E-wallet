const express = require('express');
const { Account } = require('../db/database');
const { route } = require('./UserRoute');
const router = express.Router();

router.get('/balance', async (req, res) => {
    const account = await Account.findOne({
        userId:req.userId
    });

    res.status(200).json({
        account:account
    })
})

router.post('/transfer',async (req,res)=>{
     
})




module.exports=router;