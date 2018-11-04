require('dotenv').config();
const axios = require('axios');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const http = require('http');
const socketIo = require('socket.io');
const server = http.createServer(app);
const io = socketIo(server);
const db = require('../Database');
// const fs = require('fs');


app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.post('/login', (req, res) => {
  
  // temporary function until bcrypt is installed
  db.verifyEmployee(req.body, (err, result) => {
    if(err) console.log(err);
    else result.password === req.body.password ? 
      res.send({ username: req.body.username, admin_status: result.admin_status }) : res.status(500);
  });
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



