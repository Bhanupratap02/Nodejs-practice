const express = require('express');
const app = express();
const port = 3000;
//midleware
app.use("/posts",()=>{});
//routes
app.get('/', (req, res) => res.send('Hey there we are just learnig'));
app.get("/posts",(req,res)=>{
    res.send("We are on posts");
});
// server 
app.listen(port, () => console.log(`Server started on port ${port}`));
  