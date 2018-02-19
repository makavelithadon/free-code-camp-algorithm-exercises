const path = require('path');
const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('./'));

app.get('/', (re, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
})

app.listen(port, (err) => {
  if (err) return console.error(err);
  console.log('Listening on port %d', port, ` http://localhost:${port}`);
})
