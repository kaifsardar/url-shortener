const express=require("express");
const app=express();
const {dbConnect}=require("./config/dbConnect.js");
const urlRoute=require("./routes/url.js");
const userRoute=require("./routes/auth.js")
const {auth}=require('./middleware/auth.js');
const Url=require('./models/url.js')
const User=require('./models/user.js')


const cookieParser = require('cookie-parser')

require("dotenv").config();

app.set("view engine","ejs");
app.set("views",__dirname+"/views");
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(express.static('public'))
app.set('public',__dirname+'/public');
//database connection
app.use(express.json());
dbConnect();

app.use('/url',urlRoute);
app.use('/user',userRoute);

const PORT=process.env.PORT || 6969;
app.listen(PORT,()=>{
    console.log("Server running on port ",PORT);
});

app.get('/',auth,async (req,res)=>{
    try{
    const urls=await Url.find({user:req?.user?.email});
    res.render('home.ejs',{name:req.user.name,urls,port:PORT});
    }
    catch{
        res.send("Error");
    }
})