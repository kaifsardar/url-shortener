const User=require("../models/user");
const jwt = require('jsonwebtoken');

exports.signupHandeler=async (req,res)=>{
    const {name,email,password}=req.body;
    if(!name || !email || !password){
    console.log("field missiing");
     return res.redirect('/user/signup');
    }   

    const user= await User.findOne({email});
    if(!user){
        try{
        await User.create({
            name,email,password
        });
        const token=jwt.sign({name:name,email:email},'Kaif@22534');
        res.cookie('jwt',token).redirect('/');
        }
        catch(err){
            console.log('error in creating user in db');
            return res.redirect('/user/signup');
        }
    }
    else{
        console.log("user exist");
        res.redirect('/user/signup');
    }
};

exports.loginHandeler=async (req,res)=>{
    const {email,password}=req.body;
    if(!email || !password) return res.redirect('/user/login');
    try{
    const user=await User.findOne({email,password});
    if(!user) return res.redirect('/user/login');
    if(password!=user.password) return res.redirect('/user/login');
    const token=jwt.sign({name:user.name,email:user.email},'Kaif@22534');
    res.cookie('jwt',token).redirect('/');
    }
    catch{
        console.log("eroor in finding user ");
    }
    
}

exports.logoutHandeler=async (req,res)=>{
    res.clearCookie('jwt').redirect('/');
}