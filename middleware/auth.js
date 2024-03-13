const User=require("../models/user");
var jwt = require('jsonwebtoken');


exports.auth=async(req,res,next)=>{
    const token=req.cookies.jwt;
    if(!token) return res.redirect('/user/login');
    try{
        const user =jwt.verify(token, 'Kaif@22534');
        if(!user) return res.redirect('/user/login');
        req['user']=user;
        next();
    }
    catch(err){
        console.log('invalid token err');
        return res.redirect('/user/login');
    }
}