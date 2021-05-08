const app = require("./app");
const socket = require('socket.io');
const cors = require('cors');
const Message = require('./models/Message');

// ℹ️ Sets the PORT for our app to have access to it. If no env has been set, we hard code it to 3000
const PORT = process.env.PORT || 5000;
app.use(require('cors')())

const server = app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});

const io = socket(server, {
  cors: {
    origin: 'http://localhost:3000'
  }
})

io.on('connection', (socket) => {
  console.log('new connection');
  console.log('socket id: ', socket.id);
  // socket on incoming message
  socket.on('new-message', data => {
    console.log('data: ', data);
    Message.create({
      message : data.message
      // created_by:
    })
    io.emit('new-response', data);
  })
  socket.on('disconnect', () => {
    console.log('disconnected')
  })
})