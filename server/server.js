const express = require('express');

const app = express();
const port = 3000;
const path = require('path');

app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/public')));

app.get('/test', (req, res) => {
  res.send('test');
});

const server = app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

module.exports = {
  server,
  app,
};
