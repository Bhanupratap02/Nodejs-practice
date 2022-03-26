
const express = require('express');
const router = express.Router();
const Post = require("../model/Post");

//get all the post
router.get("/",async (req,res)=>{
    try{
   const posts = await Post.find();
   res.json(posts);
    }catch(err){
      res.json({message:`here is the error- ${err}`});
    }
});
//submit the post
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
//get a single post
router.get('/:postId',async  (req, res) => {
    try {
      const post = await Post.findById(req.params.postId);
      res.json(post); 
    } catch (err) {
        res.json({message:err});
    }
  
});
//delete a post 
router.delete('/:postId', async (req, res) => {
  const removedpost = await Post.remove({_id:req.params.postId});
  res.json(removedpost);
});
//update post
router.patch('/:postId',async  (req, res) => {
    const updatedpost = await Post.updateOne({_id:req.params.postId},{$set:{title:req.body}});
  res.json(updatedpost);
  
});
 
module.exports = router;
