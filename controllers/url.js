
const  shortid  =require("shortid");
const Url=require('../models/url.js');


exports.urlPostRouteHandeler=async(req,res)=>{
    const shortId=shortid();
    const originalUrl=req.body.url.trim();
    if(originalUrl=='') return res.redirect('/');
    await Url.create({
        shortId,
        originalUrl,
        visitHistory:[],
        user:req.user.email,
    });
    res.redirect('/');
    // res.status(200).json({
    //     id: shortId
    // });
}

exports.urlRedirectHandeler=async(req,res)=>{
    const shortId=req.params.id;
    const urlEntry=await Url.findOneAndUpdate({shortId},{$push : {visitHistory: Date.now()}});
    res.redirect(urlEntry?.originalUrl); 
}