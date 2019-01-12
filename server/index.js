require('dotenv').config();
const axios = require('axios');
const bodyParser = require('body-parser');
const express = require('express');
const bcrypt = require('bcrypt-nodejs');
const sessions = require('express-session');
const app = express();
const http = require('http');
const socketIo = require('socket.io');
const server = http.createServer(app);
const io = socketIo(server);
// const db = require('../Database');
const shapeData = require('../Services/Helpers/ShapeTaskData');
const router = require('./routes.js');



app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(sessions({ secret: process.env.SECRET, resave: false, saveUninitialized: true }));
app.use('/', router);


// CONTACTS

app.post('/api/addContact', (req, res) => {
  let newContact = req.body.newContact;
  db.addContact(newContact, (err, result) => {
    if(err) console.log(err);
    else res.end();
  })
});

app.get('/api/getContacts', (req, res) => {
  db.getAllContacts((err, contacts) => {
    if(err) console.log(err);
    else res.send(contacts)
  })
});

app.post('/api/searchContacts', (req, res) => {
  db.searchContacts(req.body.query, (err, contacts) => {
    if(err) console.log(err);
    else {
      res.send(contacts);
    }
  });
});


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



