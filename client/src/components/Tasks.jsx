import React from 'react';
import { Button, Container, Row, Col, Collapse, ListGroup, ListGroupItem, Badge } from 'reactstrap';
import TaskCard from './TaskComponents/EmployeeTaskCard.jsx';


class Tasks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: {
        'Dr. Johnson': [34, 3454, 564], 
        'Sieh': [4576, 6547, 9], 
        'Kellee': [345], 
        'DD': [345346, 768], 
        'Karla': [354],
        "Stephanie": [5465, 6576, 888899, 3456, 54], 
        "Kari": [4354, 65, 89]
      },
      currEmployeeOnly: {
        user: 'Sieh',
        tasks: [4576, 6547, 9]
      },
      poolTasks: [{'task1': 'unassigned'}, {'task2': 'completed'}, {'task2': 'completed'}],
      taskTotal: 0,
      user: 'Sieh',
      collapse: false
    };
    this.toggleAllEmployeeView = this.toggleAllEmployeeView.bind(this);
  }

  componentDidMount() {
    
    if(this.props.status === 'Admin') {
      //if admin, get all employees and their tasks. and pool data
      
      //update employees object
      //update total number of tasks
      let total = 0;
      Object.values(this.state.employees).map(num => total += num.length);
      this.setState({ taskTotal : total });

    } else {
      // else get this employee's info data
      
    }  
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
              return <TaskCard key={i} employee={person} tasks={this.state.employees[person]} />
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
              <ListGroupItem className="allTasks" > Unassigned </ListGroupItem>
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