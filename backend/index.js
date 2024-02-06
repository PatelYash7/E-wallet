const express = require("express");
const bodyParser = require("body-parser");
const cors =require('cors');
const jwt = require('jsonwebtoken');
const db = require("./db/database");
const app = express();
//Routes
const rootRouter =require('./routes/index');
const UserRoute= require('./routes/UserRoute')

db
app.use(bodyParser.json());
app.use(cors());
app.use('/api/v1', rootRouter);
app.use('/api/v1',UserRoute);

app.listen(3000,()=>{
    console.log("Server Started");
})

