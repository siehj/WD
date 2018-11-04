const fakeTasks = [
  {id: 1, task: 'a', note: 'test', completed: false, created: '2018-10-28', deadline: '2018-11-08', employee_id: 1 },
  {id: 2, task: 'b', note: 'test', completed: false, created: '2018-10-20', deadline: '2018-11-08', employee_id: 2 },
  {id: 3, task: 'c', note: 'test', completed: false, created: '2018-10-30', deadline: '2018-11-08', employee_id: 4 },
  {id: 4, task: 'd', note: 'test', completed: false, created: '2018-10-22', deadline: '2018-11-08', employee_id: 7 },
  {id: 5, task: 'e', note: 'test', completed: false, created: '2018-10-27', deadline: '2018-11-08', employee_id: 2 },
  {id: 6, task: 'f', note: 'test', completed: false, created: '2018-10-30', deadline: '2018-11-08', employee_id: 5 },
  {id: 7, task: 'g', note: 'test', completed: false, created: '2018-10-22', deadline: '2018-11-08', employee_id: 5 },
  {id: 8, task: 'h', note: 'test', completed: false, created: '2018-10-20', deadline: '2018-11-08', employee_id: 4 },
  {id: 9, task: 'i', note: 'test', completed: false, created: '2018-10-22', deadline: '2018-11-08', employee_id: 2 },
  {id: 10, task: 'j', note: 'test', completed: false, created: '2018-10-28', deadline: '2018-11-08', employee_id: 1 },
  {id: 11, task: 'k', note: 'test', completed: false, created: '2018-10-28', deadline: '2018-11-08', employee_id: 3 },
  {id: 12, task: 'l', note: 'test', completed: false, created: '2018-10-28', deadline: '2018-11-08', employee_id: 1 },
  {id: 13, task: 'm', note: 'test', completed: false, created: '2018-10-24', deadline: '2018-11-08', employee_id: 6 },
  {id: 14, task: 'n', note: 'test', completed: false, created: '2018-10-22', deadline: '2018-11-08', employee_id: 2 },
  {id: 15, task: 'o', note: 'test', completed: false, created: '2018-10-30', deadline: '2018-11-08', employee_id: 3 },
  {id: 16, task: 'p', note: 'test', completed: false, created: '2018-10-22', deadline: '2018-11-08', employee_id: 4 },
  {id: 17, task: 'q', note: 'test', completed: false, created: '2018-10-21', deadline: '2018-11-08', employee_id: 7 },
];

const fakeTaskPool = [
  {id: 18, task: 'a', note: 'test', completed: false, created: '2018-10-28', deadline: '2018-11-08', employee_id: 'unassigned' },
  {id: 19, task: 'b', note: 'test', completed: true, created: '2018-10-20', deadline: '2018-11-08', employee_id: 'unassigned' },
  {id: 20, task: 'c', note: 'test', completed: true, created: '2018-10-30', deadline: '2018-11-08', employee_id: 'unassigned' },
  {id: 21, task: 'd', note: 'test', completed: true, created: '2018-10-22', deadline: '2018-11-08', employee_id: 'unassigned' },
  {id: 22, task: 'e', note: 'test', completed: false, created: '2018-10-27', deadline: '2018-11-08', employee_id: 'unassigned' },
  {id: 23, task: 'f', note: 'test', completed: false, created: '2018-10-30', deadline: '2018-11-08', employee_id: 'unassigned' },
  {id: 24, task: 'g', note: 'test', completed: true, created: '2018-10-22', deadline: '2018-11-08', employee_id: 'unassigned' },
  {id: 25, task: 'h', note: 'test', completed: false, created: '2018-10-20', deadline: '2018-11-08', employee_id: 'unassigned' },
];

const fakeEmployees = [
  {id: 0, name: 'Intern', username: 'intern', admin_status: true, position_id: 0 },  
  {id: 1, name: 'Sieh', username: 'Sieh', admin_status: true, position_id: 1 },
  {id: 2, name: 'Francisca', username: 'Dr.J', admin_status: true, position_id: 1 },
  {id: 3, name: 'Kellee', username: 'Kellee', admin_status: true, position_id: 1 },
  {id: 4, name: 'Stephanie', username: 'Steph', admin_status: false, position_id: 2 },
  {id: 5, name: 'Ande', username: 'DD', admin_status: false, position_id: 2 },
  {id: 6, name: 'Karla', username: 'Karlita', admin_status: false, position_id: 2 },
  {id: 7, name: 'Kari', username: 'Kari', admin_status: false, position_id: 3 },
];

const fakeContacts = [
  
];