const client = require('../index.js');

// EMPLOYEES -- add, remove update, get all
const verifyEmployee = (data, callback) => {
  let qs = `SELECT password,admin_status FROM employees WHERE name='${data.username}';`;
  client.query(qs, (err, result) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result[0]);
    }
  });
}

const getAllEmployees = (callback) => {
  let qs = `SELECT username FROM employees;`;
  client.query(qs, (err, employees) => {
    if(err) callback(err, null);
    else callback(null, employees);
  });
}


module.exports = {
  verifyEmployee, 
  getAllEmployees,

};