const mongoose = require('mongoose');
require("dotenv").config();
exports.dbConnect=()=>{
mongoose.connect(process.env.DB_URL)
.then(()=>{
    console.log("DB connection successful");
})
.catch(()=>{
    console.log("DB connection failed");
})
}
