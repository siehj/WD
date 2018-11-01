import React from 'react';
import { Button, Container, Row, Col, Collapse, ListGroup, ListGroupItem } from 'reactstrap';
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
      user: 'Sieh',
      collapse: false
    };
    this.toggleAllEmployeeView = this.toggleAllEmployeeView.bind(this);
  }

  componentDidMount() {
    // console.log(this.props.status === 'Admin');
    //if admin, get all employees and their tasks. 
  

    // else get this employee's info
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
          <ListGroupItem onClick={this.toggleAllEmployeeView} className="allTasks" >All Assigned Tasks</ListGroupItem>
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
      </div>
      </div>
    )
  }
}

export default Tasks; 