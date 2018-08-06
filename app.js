const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/routes/index.html');
})

app.use(express.static('public'));

app.listen(3000 , () => {
  console.log('Server Initialized!');
})