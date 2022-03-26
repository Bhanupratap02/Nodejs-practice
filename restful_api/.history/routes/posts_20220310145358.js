
const express = require('express');
const router = express.Router();
const Post = require("../model/Post");


router.get("/",(req,res)=>{
    res.send("We are on posts");
});
router.post('/',  (req, res) => {
  const post = new Post({
    title:req.body.title,
    description:req.body.description 
  });
  post.save()
  .exec()
  .then(data=>{
    res.json(data)
  });
});
module.exports = router;
