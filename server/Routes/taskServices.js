// const db = require('../../Database');

module.exports = {

  'addTask' : (req, res) => {
    // console.log(req.body.newTask);
    let newTask = req.body.newTask;
  
    db.addTask(newTask, (err, task) => {
      if (err) console.log(err);
      else res.end();
    })
  },

  'getAllUnassigned' : (req, res) => {
    db.getUnassigned((err, unassigned) => {
      if(err) console.log(err);
      else {
  
        let result = shapeData(Object.values(Object.values(unassigned)));
        res.send(result.unassigned);
      }
    })
  },

  'getAllTasks' : (req, res) => {
    db.getAllTasks((err, tasks) => {
      if(err) console.error;
      else {
  
        let result = shapeData(Object.values(Object.values(tasks)));
        res.send(result);
      };
    });
  },

  'getUserTasks' : (req, res) => {
    db.getAllUserTasks(req.body.username, (err, tasks) => {
      if(err) console.error;
      else res.send(tasks);
    });
  },

  'completeTask' : (req, res) => {

    db.completeTask(req.body.taskId, (err, result) => {
      if(err) console.log(err);
      // else res.end();
      else {
        db.removeTask(req.body.taskId, (err, deleteResult) => {
          if (err) console.log(err);
          else {
            res.end();
          }
        })
      }
    });
  },

  'assignTask' : (req, res) => {
    db.assignTask(req.body.taskId, req.body.user, (err, result) => {
      if(err) console.error;
      else res.end();
    });
  },

  'getCompletedTasks' : (req, res) => {
    db.getCompletedTasks((err, result) => {
      if(err) console.log(err);
      else res.send(result);
    })
  }

}