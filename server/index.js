require('dotenv').config();
const express = require('express');
const app = express();

const axios = require('axios');
const bodyParser = require('body-parser');
const compression = require('compression');
const cors = require('cors');
const helmet = require('helmet');
const http = require('http');
const socketIo = require('socket.io');
const sessions = require('express-session');
const server = http.createServer(app);
const io = socketIo(server);
const router = require('./routes.js');

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(helmet()); 
app.use(cors({
  origin: ["http://localhost:3000"],
  methods: ["GET", "POST", "PUT"]
}));
app.use(compression());
app.use(sessions({ secret: process.env.SECRET, resave: false, saveUninitialized: true }));
app.use('/', router);

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
