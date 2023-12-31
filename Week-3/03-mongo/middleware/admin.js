const {Admin} = require("../db/index")//in db folder in index.js file it will fetch admin db from mongodb as momgo connection is done there

// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const username = req.headers.username;
    const password = req.headers.password;
    Admin.findOne({
        username :username,
        password: password,
    })
    .then(function(value){
        if(value){
            next();
        }else{
            res.status(403).json({
                msg: 'user does not exist'
            })
        }
    })
}

module.exports = adminMiddleware;