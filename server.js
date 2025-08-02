require('dotenv').config();
const express = require('express');
const http = require('http');
const path = require('path');
const { initializeSockets } = require('./socket');

const app = express();
const server = http.createServer(app);
const io = require('socket.io')(server);

app.use(express.static(path.join(__dirname, '../public')));

initializeSockets(io);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`🟢 Blah Blah Blah chat server is running at http://localhost:${PORT}`);
});