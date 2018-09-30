const express = require('express');
const bodyParser = require('body-parser');
// const io = require('socket.io');
var http = require('http').Server('index');
var io = require('socket.io')(http);

const app = express();
app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.post('/login', (req, res) => {
  console.log(req.body);

  res.send('hey');
})

//Whenever someone connects this gets executed
io.on('connection', function(socket) {
  console.log('A user connected');

  //Whenever someone disconnects this piece of code executed
  socket.on('disconnect', function () {
     console.log('A user disconnected');
  });
});


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));



