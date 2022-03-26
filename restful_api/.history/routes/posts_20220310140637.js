
const express = require('express');
const router = express.Router();
app.get('/', (req, res) => res.send('Hey there we are just learnig'));
app.get("/posts",(req,res)=>{
    res.send("We are on posts");
});