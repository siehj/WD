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

const getAllEmployees = (callback) => {
  let qs = `SELECT username FROM employees;`;
  con.query(qs, (err, employees) => {
    if(err) callback(err, null);
    else callback(null, employees);
  });
}

// TASKS -- add, complete, get all, assign, update
const addTask = (task, callback) => {
  let date = new Date;
  let deadline = new Date(task.deadline);

  // get the id for the user 
  let getId = `SELECT id FROM employees WHERE username='${task.assignedTo}';`;
  con.query(getId, (err, id) => {
    if(err) console.log(err);
    // create the task
    else {
      
      let qs = `INSERT INTO tasks (task, note, completed, created, deadline, employee_id) 
      VALUES ('${task.task}', '${task.note}', '${task.completed}', '${date.toISOString().split('T')[0]}', '${deadline.toISOString().split('T')[0]}', ${task.assignedTo === 'unassigned' ? 'unassigned' : `${id[0].id}`});`;
     
      con.query(qs, (err, result) => {
        if(err) console.log(err);
        else callback(null, result);
      });
    }
  });

};

const getAllTasks = (callback) => {
  let qs = `SELECT tasks.id, tasks.task, tasks.note, tasks.completed, tasks.created, tasks.deadline, employees.username FROM tasks
  INNER JOIN employees ON tasks.employee_id = employees.id`;
  con.query(qs, (err, result) => {
    if(err) callback(err, null);
    else callback(null, result);
  });
};

const getAllUserTasks = (user, callback) => {
  let qs = `SELECT * FROM tasks WHERE username='${user};`;
  con.query(qs, (err, result) => {
    if(err) callback(err, null);
    else callback(null, result[0]);
  });
};

const assignTask = (taskId, user, callback) => {
  let qs = `UPDATE tasks SET employee_id=(SELECT id FROM employees WHERE name='${user}') WHERE id='${taskId}';`;
  con.query(qs, (err, result) => {
    if (err) callback(err, null);
    else callback(null, result[0]);
  });
};

const completeTask = (taskId, callback) => {
  let qs = `UPDATE tasks SET completed=1 WHERE id='${taskId}';`;
  con.query(qs, (err, result) => {
    if (err) callback(err, null);
    else callback(null, result[0]);
  });
};




module.exports = { addContact, 
  verifyEmployee, 
  addTask, 
  completeTask, 
  assignTask,
  getAllTasks,
  getAllUserTasks,
  getAllEmployees 
};

