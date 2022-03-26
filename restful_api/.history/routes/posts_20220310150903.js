
const express = require('express');
const router = express.Router();
const Post = require("../model/Post");


router.get("/",async (req,res)=>{
    try{

    }catch(err){
      res.json({message:`the error is $`})
    }
});
router.post('/', async  (req, res) => {
  const post = new Post({
    title:req.body.title,
    description:req.body.description 
  });
  try{
  const savedPost = await post.save();
 res.json(savedPost);
  }catch(err){
      res.json({message:err});
  }
});
module.exports = router;
