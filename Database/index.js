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
const verifyEmployee = (data, callback) => {
  let qs = `SELECT password,admin_status FROM employees WHERE name='${data.username}';`;
  con.query(qs, (err, result) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result[0]);
    }
  });
}

// TASKS -- add, complete, get all, assign, update


module.exports = { addContact, verifyEmployee };

