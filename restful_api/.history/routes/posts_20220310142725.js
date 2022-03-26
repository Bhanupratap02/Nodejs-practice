
const express = require('express');
const router = express.Router();
const 


router.get("/",(req,res)=>{
    res.send("We are on posts");
});
module.exports = router;