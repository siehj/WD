// const mysql = require('mysql');
const { Client } = require('pg');

const client = new Client(process.env.DATABASE_PG + '?ssl=true');
client.connect(err => err ? console.log(err) : console.log('connected successfully to db!'));

module.exports = { client };
// const con = mysql.createConnection({
//   host : process.env.DBHost,
//   user : process.env.DBUsername, 
//   password : process.env.DBPassword, 
//   database: process.env.DBName
// });

// con.connect((err) => {
//   if (err) {
//     console.log('error connecting: ', err.stack)
//     return;
//   };

//   console.log('connected', con.threadId);
// });


