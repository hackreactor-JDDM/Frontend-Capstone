const express = require('express');
const path = require('path')
const server = express();
const port = 3005;

server.use(express.static('client/dist'));

server.listen(port, () => {
  console.log(`listening on port ${port}`);
});