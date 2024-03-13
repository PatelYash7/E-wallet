const express = require("express");
const bodyParser = require("body-parser");
const cors =require('cors');
const db = require("./db/database");
const app = express();
//Routes
const rootRouter =require('./routes/index');
const accountRouter = require('./routes/Account');

try {
     db
} catch (error) {
    console.log("Error Happened while connecting to Database");
    console.log(error);
}
app.use(bodyParser.json());
app.use(cors());
app.use('/api/v1', rootRouter);
app.use('/api/v1', accountRouter);
app.listen(3000,()=>{
    console.log("Server Started");
})

