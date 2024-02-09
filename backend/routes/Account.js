const express = require('express');
const { Account } = require('../db/database');
const { startSession } = require('mongoose');
const { authMiddleware } = require('../middleware/middleware');
const router = express.Router();

router.get('/balance',authMiddleware, async (req, res) => {
    const account = await Account.findOne({
        userId:req.userId
    });

    res.status(200).json({
        Balance:account.balance
    })
})

router.post('/transfer',authMiddleware,async (req,res)=>{
    //Create a Session
    const session = await startSession();
    
    //Start Transaction
    (await session).startTransaction();
    const {amount,to} = req.body;
    
    const sendAccount = await Account.findOne({userId:req.userId}).session(session);
    console.log(sendAccount.balance);
    if(!sendAccount || sendAccount.balance < amount){
        (await session).abortTransaction();
        return res.status(400).json({
            message:"Insufficient Balance"
        });
    }
    const toAccount = await Account.findOne({userId:to}).session(session);
    if(!toAccount){
        (await session).abortTransaction();
        return res.status(400).json({
            message:"Invalid Recipient Account"
        });
    }
    //Transfer Amount
    try{
    await sendAccount.updateOne({userId:req.userId}, {$inc:{balance:-amount}}) 
    .session(session).exec();
    await toAccount.updateOne({userId:to}, {$inc:{balance:amount}})
    .session(session).exec();
    }catch(e){
        console.log(e)
    }
    //Commit Transaction 
    (await session).commitTransaction();
    console.log(sendAccount.balance)
    console.log(toAccount.balance);

    res.json({
        message:"Transfer Successful"
    });
})

module.exports=router;