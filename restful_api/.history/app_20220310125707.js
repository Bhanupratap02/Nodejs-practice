const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hey there we are just learnig'));
app.listen(port, () => console.log(`on port ${port}!`));
