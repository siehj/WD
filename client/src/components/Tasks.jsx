import React from 'react';
import { Button, Container, Row, Col, Collapse, ListGroup, ListGroupItem, Badge } from 'reactstrap';
import TaskCard from './TaskComponents/EmployeeTaskCard.jsx';
import { fakeTasks, fakeEmployees, fakeTaskPool } from '../../../Database/fakeData.js';
const axios = require('axios');


class Tasks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: { },
      currEmployeeOnly: {
        user: 'Sieh',
        tasks: [4576, 6547, 9]
      },
      poolTasks: [{'task1': 'unassigned'}, {'task2': 'completed'}, {'task2': 'completed'}],
      taskTotal: 0,
      user: 'Sieh',
      collapse: false,
    };
    this.toggleAllEmployeeView = this.toggleAllEmployeeView.bind(this);
    this.setTaskComplete = this.setTaskComplete.bind(this);
  }

  componentDidMount() {
    
    if(this.props.status === 'Admin') {
      //if admin, get all employees and their tasks. and pool data
      axios.get('/api/getAllTasks')
        .then(({ data }) => {
          this.setState({ employees : data }, () => {
            let total = 0;
            Object.values(this.state.employees).map(num => total += num.length);
            this.setState({ taskTotal : total });
          });
        })
      //update employees object
      //update total number of tasks
      // let empsTasks = {};
      // let tasks = {};

      // fakeEmployees.map(emp => {
      //   empsTasks[emp.id] = emp.username;
      //   tasks[emp.username] = [];
      // });
      
      // fakeTasks.map(task => {
      //   empsTasks[task.employee_id] ?  tasks[empsTasks[task.employee_id]].push(task) : null;
      // });
      

    } else {
      // else get this employee's info data
      
    }  
  }

  setTaskComplete(taskId) {
    console.log(taskId)
    axios.put('/api/completeTask', {taskId : taskId})
      .then(() => {console.log(done)});
  }

  toggleAllEmployeeView() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    return (
      <div>
      <Container>
        <Row>
          <Col className="text-right">
            <Button size="sm" color="success" title="task" onClick={this.props.toggleTaskModal} >CREATE NEW TASK +</Button>
          </Col>
        </Row>
      </Container>
      
      <div className="miniMain" >
      {this.props.status === 'Admin' ?
        <ListGroup>
          <ListGroupItem onClick={this.toggleAllEmployeeView} className="allTasks" >
            <a style={{ fontSize: '20px' }} > All Assigned Tasks </a> <Badge color="success" pill>{this.state.taskTotal}</Badge>
          </ListGroupItem>
          <Collapse isOpen={this.state.collapse} >
            {Object.keys(this.state.employees).map((person, i) => {
              return <TaskCard key={i} employee={person} tasks={this.state.employees[person]} complete={this.setTaskComplete} />
            })}
          </Collapse>
        </ListGroup>
       :
       <div>
        <TaskCard employee={this.state.currEmployeeOnly.user} tasks={this.state.currEmployeeOnly.tasks} />
       </div>
      }
      <div style={{ paddingTop: '10px'}} >
        <Row className="text-center">
          <Col>
            <ListGroup>
              <ListGroupItem className="allTasks" > Unassigned </ListGroupItem>
            </ListGroup>
          </Col>
          <Col>
            <ListGroup>
              <ListGroupItem className="allTasks" > Completed </ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
      </div>
      
      </div>
      </div>
    )
  }
}

export default Tasks; 