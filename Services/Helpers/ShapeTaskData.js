

const ShapeData = (EmployeeTasks) => {
  let results = {};
  // console.log(employeeTasks)
  EmployeeTasks.map(task => {
    results[task.username] ? results[task.username].push(task) : results[task.username] = [task];
  });
  return results;
}

module.exports = ShapeData;
