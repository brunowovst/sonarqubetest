const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.json');

module.exports = (req,res,next) => {
    const authHeader = req.headers.token
    if(!authHeader){
        return res.status(401).send({error:'No token provided'})
    }

    const parts = authHeader.split(' ');

    if(!parts.length==2){
        return res.status(401).send({error:'invalid token'})
    }

    const [scheme,token] = parts;

    if(!/^Bearer$/i.test(scheme)){
        return res.status(401).send({error:'invalid token format'})
    }

    jwt.verify(token,authConfig.secret,(err,decoded)=>{
        if(err) return res.status(401).send({error:'invalid token'});
        req.userId = decoded.id
        return next();
    })
}