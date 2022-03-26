
const express = require('express');
const router = express.Router();
const Post = require("../model/Post");


router.get("/",(req,res)=>{
    res.send("We are on posts");
});
router.post('/', async  (req, res) => {
  const post = new Post({
    title:req.body.title,
    description:req.body.description 
  });
  const savedPost = await post.save();
  
});
module.exports = router;
