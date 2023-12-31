const jwt = require('jsonwebtoken');
const JWT_Secret = require("../Config");
const comparisons = require('assert/build/internal/util/comparisons');

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const jwtToken = req.headers.authorization;
    const tokens = jwtToken.split(' ');
    const token = tokens[1];
    const decoded = jwt.verify(token, JWT_Secret);
    
    if(decoded){
        req.headers.username = decoded;
        next();
    }else{
        res.json({
            ERROR : 'Invalid token'
        })
    }
}

module.exports = userMiddleware;