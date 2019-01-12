// const db = require('../../Database');


module.exports = {
  'login' : (req, res) => {
    // temporary function until bcrypt is installed
    db.verifyEmployee(req.body, (err, result) => {
      if(err) console.log(err);
      else result.password === req.body.password ? () => {
        
        res.send({ username: req.body.username, admin_status: result.admin_status })
      } : res.status(500);
    });
  },
  'getEmployeeData' : (req, res) => {
    db.getAllEmployees((err, employees) => { 
      if(err) console.error;
      else {
        let response = [];
        employees.map((person) => response.push(person.username));
        res.send(response);
      }
    });
  }

}
