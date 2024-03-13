const express=require('express');
const router=express.Router();
const {signupHandeler,loginHandeler,logoutHandeler}=require("../controllers/auth.js")


router.get('/signup',(req,res)=>{
    res.render('signup.ejs');
})
router.get('/login',(req,res)=>{
    res.render('login.ejs');
})
router.post('/signup',signupHandeler);
router.post('/login',loginHandeler);
router.get('/logout',logoutHandeler);
module.exports=router;