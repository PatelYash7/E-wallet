const express = require('express');
const  router = express.Router();
const UserRoute = require('./UserRoute');
const AccountRoute = require('./Account');
router.use('/user',UserRoute);
router.use('/account',AccountRoute)

module.exports =router;