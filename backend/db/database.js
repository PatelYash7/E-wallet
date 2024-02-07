const mongoose = require('mongoose');
const {connect,Schema,model} = mongoose;
const {MONGO_URL} = require('../config');


const Database= connect(MONGO_URL).then((e)=>{
    console.log("Database Connected");
}).catch((err)=>{
    console.log("Erro Happened Cannot Connect to Database")
    console.log(err);
})

const UserSchema = Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true,
        minLength:3,
        maxLength:30,
    },
    firstname:{
        type:String,
        required:true,
        trim:true,
        maxLength:25
    },
    lastname:{  
        type:String,
        required:true,
        trim:true,
        maxLength:25
    },
    password:{
        type:String,
        required:true,
        trim:true,
        minLength:3
    },
})
const accountSchema = Schema({
    userId:{
        type:Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    balance:{
        type:Number,
        default:0,
        required:true
    }
})

//Models
const User = model('User',UserSchema);
const Account = model('Account',accountSchema);
module.exports = {
    Database,
    User,
    Account
}