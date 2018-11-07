

const ShapeData = (EmployeeTasks) => {
  let results = {};
  // console.log(employeeTasks)
  EmployeeTasks.map(task => {
    task.deadline = JSON.stringify(task.deadline).split("T")[0];
    task.created = JSON.stringify(task.created).split("T")[0];
    results[task.username] ? results[task.username].push(task) : results[task.username] = [task];
  });
  return results;
}

module.exports = ShapeData;
