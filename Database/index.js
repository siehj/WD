const mysql = require('mysql');

const con = mysql.createConnection({
  host : process.env.DBHost,
  user : process.env.DBUsername, 
  password : process.env.DBPassword, 
  database: process.env.DBName
});

con.connect((err) => {
  if (err) {
    console.log('error connecting: ', err.stack)
    return;
  };

  console.log('connected', con.threadId);
});

// CONTACTS -- add, remove, update, get all
const addContact = (data, callback) => {
  let qs = ``;
  con.query(qs, (err, result) => {
    if(err) console.log(err);
    else callback(null, result)
  })
};

// EMPLOYEES -- add, remove update, get all


// TASKS -- add, complete, get all, assign, update


module.exports = { addContact, };

