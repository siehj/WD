require('dotenv').config();
import axios from 'axios';
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const http = require('http');
const socketIo = require('socket.io');
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.post('/login', (req, res) => {
  console.log(req.body);

  res.send('hey');
})

//Whenever someone connects this gets executed
io.on('connection', (socket) => {
  console.log('A user connected', socket.id);

  //Whenever someone disconnects this piece of code executed
  socket.on('disconnect', function () {
     console.log('A user disconnected');
  });
});


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));



