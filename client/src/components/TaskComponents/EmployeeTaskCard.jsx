import React from 'react';
import { ListGroup, ListGroupItem, Badge, Collapse, Row, Col, Button } from 'reactstrap';

class TaskCard extends React.Component {
  constructor(props){
    super(props);
    this.state = { 
      collapse : false,
    };

    this.toggleView = this.toggleView.bind(this);
  }
  toggleView(e) {
    this.setState({ collapse: !this.state.collapse });
  }
 

  render(){
    return (
      <ListGroup id="taskGroup" >
        <ListGroupItem onClick={this.toggleView} className="justify-content-between">{this.props.employee} <Badge pill>{this.props.tasks.length}</Badge></ListGroupItem>
        <Collapse isOpen={this.state.collapse}>
          {this.props.tasks.map((task, i) => {
            return (
            <ListGroupItem key={i} className="indivTask" > 
              <Row>
                <Col sm="6" md="6" lg="8" xl="8" >Task: <em >{task.task}</em></Col>
                <Col> Deadline: <a style={{ color: 'red' }}> {task.deadline}</a></Col>
                <Col sm="1.5" md="1.5" lg="1.5" xl="1.5" > <Button size="sm" outline color="success" onClick={() => this.props.complete(task.id)} >Complete</Button></Col>
              </Row>
            </ListGroupItem>
            )
          })}
        </Collapse>
      </ListGroup>
    )
  }
}

export default TaskCard;