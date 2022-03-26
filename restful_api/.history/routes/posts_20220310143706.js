
const express = require('express');
const router = express.Router();
const Post = require("../model/Post");


router.get("/",(req,res)=>{
    res.send("We are on posts");
});
app.post('/',  (req, res) {
  res.send('POST request to the homepage')
})
module.exports = router;