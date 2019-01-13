const client = require('../index.js');

// TASKS -- add, complete, get all, assign, update

module.exports = {
  
  "addTask" : (task, callback) => {
    let date = new Date;
    let deadline = new Date(task.deadline);

    if (task.assignedTo === 'unassigned') {
      let qs = `INSERT INTO tasks (task, note, completed, created, deadline) 
        VALUES ('${task.task}', '${task.note}', '${task.completed}', '${date.toISOString().split('T')[0]}', '${deadline.toISOString().split('T')[0]}');`;
      
        client.query(qs, (err, result) => {
          if(err) console.log(err);
          else callback(null, result);
        });
    } else {
      // get the id for the user 
      let getId = `SELECT id FROM employees WHERE username='${task.assignedTo}';`;
    
      client.query(getId, (err, id) => {
        if(err) console.log(err);
        // create the task
        else {
          
          let qs = `INSERT INTO tasks (task, note, completed, created, deadline, employee_id) 
          VALUES ('${task.task}', '${task.note}', '${task.completed}', '${date.toISOString().split('T')[0]}', '${deadline.toISOString().split('T')[0]}', '${id[0].id}' );`;
          
          client.query(qs, (err, result) => {
            if(err) console.log(err);
            else callback(null, result);
          });
        }
      });
    }

  },

  "getUnassigned" : (callback) => {
    let qs = `SELECT * FROM tasks WHERE employee_id IS NULL;`;
    client.query(qs, (err, unassigned) => {
      if(err) callback(err, null);
      else callback(null, unassigned);
    })
  },

  "getAllTasks" : (callback) => {
    let qs = `SELECT tasks.id, tasks.task, tasks.note, tasks.completed, tasks.created, tasks.deadline, employees.username FROM tasks
    INNER JOIN employees ON tasks.employee_id = employees.id`;
    client.query(qs, (err, result) => {
      if(err) callback(err, null);
      else callback(null, result);
    });
  },

  "getAllUserTasks" : (user, callback) => {
    let qs = `SELECT * FROM tasks WHERE username='${user};`;
    client.query(qs, (err, result) => {
      if(err) callback(err, null);
      else callback(null, result[0]);
    });
  },

  "assignTask" : (taskId, user, callback) => {
    let qs = `UPDATE tasks SET employee_id=(SELECT id FROM employees WHERE name='${user}') WHERE id='${taskId}';`;
    client.query(qs, (err, result) => {
      if (err) callback(err, null);
      else callback(null, result[0]);
    });
  },

  "completeTask" : (taskId, callback) => {

    // get the task at the id, take it's info (text, note, employee_id) *set completedDate

    let getTask = `SELECT * FROM tasks WHERE id=${taskId};`;
    client.query(getTask, (err, completedTask) => {
      if (err) callback(err, null);
      else {
        let task = completedTask[0];
        let date = new Date;

        let complete = `INSERT INTO completedTasks (task, note, completeDate, employee_id) 
        VALUES ('${task.task}', '${task.note}', '${date.toISOString().split('T')[0]}', '${task.employee_id}');`;

        client.query(complete, (err, result) => {
          if (err) callback(err, null);
          else callback(null, result);
        })
      }
    })
  },

  "removeTask" : (taskId, callback) => {
    let qs = `DELETE FROM tasks WHERE id=${taskId};`;
    client.query(qs, (err, result) => {
      if (err) callback(err, null);
      else callback(null, result);
    })
  },

  "getCompletedTasks" : (callback) => {
    let qs = `SELECT completedTasks.id, completedTasks.task, completedTasks.note, completedTasks.completeDate, employees.username FROM completedTasks
    INNER JOIN employees ON completedTasks.employee_id = employees.id;`;
    client.query(qs, (err, result) => {
      if (err) callback(err, null);
      else callback(null, result);
    })
  }

};