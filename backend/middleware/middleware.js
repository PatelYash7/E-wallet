const { JWT_SECRET } = require("../config");
const jwt = require('jsonwebtoken')

function authMiddleware (req,res,next){
    const authHeader = req.headers.authorization;

    if(!authHeader || !authHeader.startwith('Bearer')){
        return res.status(403).json({
            message:"Authorization Failed"
        });
    }
    const token = authHeader.split('')[1];
    try {
        const decodedToken = jwt.verify(token,JWT_SECRET);
        req.userId = decodedToken.userId;
        next();
    } catch (err) {
        return res.send(403).json({});
    }
}
module.exports = {
    authMiddleware:authMiddleware
}
