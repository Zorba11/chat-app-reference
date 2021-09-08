const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const cors = require('cors');

const PORT = process.env.PORT || 5000;

const router = require('./router');

const app = express();

// using http for running socket.io in  the same server instance - can also
// be done using app.listen - https://stackoverflow.com/questions/28305120/differences-between-express-router-and-app-get
const server = http.createServer(app);
const io = socketio(server, {
  cors: {
    origin: 'http://localhost:3000',
  },
});

io.on('connection', (socket) => {
  console.log('we have a new connection.');

  socket.on('join', ({ name, room }, callback) => {
    console.log(name, room);

    const error = true;

    // if (error) {
    //   callback({ error: 'error' });
    // }
  });

  socket.on('disconnect', () => {
    console.log('User left!');
  });
});

app.use(router);

server.listen(PORT, () => {
  console.log(`server has started on port: ${PORT}`);
});
