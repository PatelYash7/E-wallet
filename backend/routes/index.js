const express = require('express');
const  Router = express.Router();

Router.get('/', (req, res) => {
    res.json({
        message: "Testing Router"
    })
})

module.exports =Router;