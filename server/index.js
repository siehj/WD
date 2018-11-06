require('dotenv').config();
const axios = require('axios');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const http = require('http');
const socketIo = require('socket.io');
const server = http.createServer(app);
const io = socketIo(server);
// import { fakeData } from './fakeData.js';
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
});

app.get('/api/getEmployees', (req, res) => {
  db.getAllEmployees((err, employees) => { 
    if(err) console.error;
    else {
      let response = [];
      employees.map((person) => response.push(person.name));
      res.send(response);
    }
  });
});

app.post('/api/saveTask', (req, res) => {
  //
  // console.log(req.body.newTask);
  db.addTask(req.body.newTask, (err, task) => {
    if (err) console.log(err);
    else console.log('whaaaaa ',task);
  })
  res.end();
});

app.get('/api/getAllTasks', (req, res) => {
  db.getAllTasks((err, tasks) => {
    if(err) console.error;
    else res.send(tasks);
  });
});

app.get('/api/getUserTasks', (req, res) => {
  db.getAllUserTasks(req.body.username, (err, tasks) => {
    if(err) console.error;
    else res.send(tasks);
  });
});

app.put('/api/completeTask', (req, res) => {
  console.log(req.body);
  // db.completeTask(req.body.taskId, (err, result) => {
  //   if(err) console.error;
  //   else res.end();
  // });
});

app.post('/api/assignTask', (req, res) => {
  db.assignTask(req.body.taskId, req.body.user, (err, result) => {
    if(err) console.error;
    else res.end();
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



