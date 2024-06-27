const mongoose = require('mongoose');
require("dotenv").config();
exports.dbConnect=()=>{
mongoose.connect(process.env.DB_URL,{
    useUnifiedTopology: true,
    useNewUrlParser: true,
    })
.then(()=>{
    console.log("DB connection successful");
})
.catch(()=>{
    console.log("DB connection failed");
})
}
