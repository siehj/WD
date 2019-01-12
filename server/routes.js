const router = require('express').Router();
const userServices = require('./Routes/userServices.js');
const taskServices = require('./Routes/taskServices.js');
const contactServices = require('./Routes/contactServices.js');

// user service related endpoints
router.post('/login', userServices.login);

router.get('/api/getEmployees', userServices.getEmployeeData);


//  Task related endpoints
router.post('/api/saveTask', taskServices.addTask);

router.get('/api/allUnassigned', taskServices.getAllUnassigned);

router.get('/api/getAllTasks', taskServices.getAllTasks);

router.get('/api/getUserTasks', taskServices.getUserTasks);

router.put('/api/completeTask', taskServices.completeTask);

router.post('/api/assignTask', taskServices.assignTask);

router.get('/api/allCompleted', taskServices.getCompletedTasks);


// Contact related endpoins
router.post('/api/addContact', contactServices.addContact);

router.get('/api/getContacts', contactServices.getContacts);

router.post('/api/searchContacts', contactServices.searchContacts);




module.exports = router;