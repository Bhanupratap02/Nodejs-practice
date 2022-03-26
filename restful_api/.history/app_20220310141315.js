const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

//import route
const postsRoute = require('./routes/posts');
app.use("./use")



// connect to DB
mongoose.connect('mongodb://localhost:27017/test', ()=> {
    console.log('mongodb connected')
});
// server 
app.listen(port, () => console.log(`Server started on port ${port}`));
  