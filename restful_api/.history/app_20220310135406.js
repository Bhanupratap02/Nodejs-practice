const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;
//midleware

//routes
app.get('/', (req, res) => res.send('Hey there we are just learnig'));
app.get("/posts",(req,res)=>{
    res.send("We are on posts");
});
// connect to DB
mongoose.connect
// server 
app.listen(port, () => console.log(`Server started on port ${port}`));
  