const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hey there we are just learnig'));
app.post('/posts', function (req, res) {
  res.send('Hey there this ')
})
app.listen(port, () => console.log(`Server started on port ${port}`));
 