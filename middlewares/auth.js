const { Token } = require('../models/Token');
const jwt = require("jsonwebtoken");

let auth = (req, res, next) => {
    const token = req.headers.authorization.split(" ")[1]; 
    const decoded = jwt.verify(token, process.env.JWT_KEY);

    Token.findOne({_customerId: decoded.customerId, token, tokenType: 'login'}, (err, customerToken) => {
        if(err) throw err;
        if(!customerToken){
            return res.json({
                isAuth: false,
            })
        }
        req.token = token;
        req.customerId =decoded.customerId;
        next();
    })
}

module.exports = {auth}