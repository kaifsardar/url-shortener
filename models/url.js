const mongoose=require("mongoose");

const urlSchema=new mongoose.Schema({
    shortId:{
        type:String,
        require: true,
        unique:true,
    },
    user:{
        type: String,
        require:true,
    },
    originalUrl:{
        type:String,
        require:true,
    },
    visitHistory:[
        {type:Date}
    ],

}, {timestamps:true});

module.exports=mongoose.model('Url',urlSchema);