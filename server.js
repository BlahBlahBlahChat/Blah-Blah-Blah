require('dotenv').config();
const express = require('express');
const http = require('http');
const path = require('path');
const app = express();

const server = http.createServer(app);
const io = require('socket.io')(server);

// Serve static files from root
app.use(express.static(__dirname));

// Handle WebSocket connections
io.on('connection', (socket) => {
  console.log('✅ A user connected to Blah Blah Blah');

  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });

  socket.on('disconnect', () => {
    console.log('❌ A user disconnected');
  });
});

// Start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`🟢 Blah Blah Blah running at http://localhost:${PORT}`);
});
