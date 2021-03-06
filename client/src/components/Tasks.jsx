import React from 'react';
import { Button, Container, Row, Col, Collapse, ListGroup, ListGroupItem, Badge } from 'reactstrap';
import TaskCard from './TaskComponents/EmployeeTaskCard.jsx';
import OtherTaskCards from './TaskComponents/OtherTaskCards.jsx';
// import { fakeTasks, fakeEmployees, fakeTaskPool } from '../../../Database/fakeData.js';
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
      unassignedTasks: [],
      completedTasks: [],
      taskTotal: 0,
      user: 'Sieh',
      collapse: false,
    };
    this.toggleLists = this.toggleLists.bind(this);
    this.setTaskComplete = this.setTaskComplete.bind(this);
    this.getTasks = this.getTasks.bind(this);
    this.getUnassigned = this.getUnassigned.bind(this);
    this.getCompleted = this.getCompleted.bind(this);
  }

  componentDidMount() {
    
    //if admin, get all employees and their tasks. and pool data
    if(this.props.status === 'Admin') {
      this.getTasks();

    } else {
      // else get this employee's info data
      
    }  
  }

  getTasks() {
    axios.get('/api/getAllTasks')
      .then(({ data }) => {
        this.setState({ employees : data }, () => {
          let total = 0;
          Object.values(this.state.employees).map(num => total += num.length);
          this.setState({ taskTotal : total });
        });
      })
      .then(() => this.getUnassigned());
  }

  getUnassigned() {
    axios.get('/api/allUnassigned')
      .then(({ data }) => {
        this.setState({ unassignedTasks: data });
      })
      .then(() => this.getCompleted());
  }

  getCompleted() {
    axios.get('/api/allCompleted')
      .then(({ data }) => {
        this.setState({ completedTasks: data });
      });
  }

  setTaskComplete(taskId) {
    axios.put('/api/completeTask', {taskId : taskId})
      .then(() => this.getTasks());
  }

  toggleLists() {
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
          <ListGroupItem onClick={this.toggleLists} className="allTasks" >
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
            <OtherTaskCards unassignedTasks={this.state.unassignedTasks} card={"unassigned"} />
          </Col>
          <Col>
            <ListGroup>
              <OtherTaskCards completedTasks={this.state.completedTasks} card={"completed"} />
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