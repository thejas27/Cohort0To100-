const jwt = require('jsonwebtoken');
const JWT_Secret = require("../Config");

// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const jwtToken = req.headers.authorization;
    const tokens = jwtToken.split(' ');//we are sending barer nmvjhgjh split(' ') splits the given string into arrays of strings whereever the space exists
    const token = tokens[1];
    console.log(JWT_Secret)
    const decoded = jwt.verify(token, JWT_Secret);
    if(decoded){
        next();
    }else{
        json.send('invalid token');
    }
}

module.exports = adminMiddleware;