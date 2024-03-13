const express=require("express");
const router=express.Router();
const {urlPostRouteHandeler,urlRedirectHandeler}=require("../controllers/url.js")
const {auth}=require("../middleware/auth.js");

router.post('/',auth,urlPostRouteHandeler);
router.get('/:id',urlRedirectHandeler)

module.exports=router;