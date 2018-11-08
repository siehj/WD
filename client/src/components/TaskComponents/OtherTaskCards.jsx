import React from 'react';
import { ListGroup, ListGroupItem, Badge, Collapse, Row, Col, Button } from 'reactstrap';

class OtherTaskCards extends React.Component {
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
    if(this.props.card === "unassigned") {

      return (
        <ListGroup>
        <ListGroupItem className="allTasks" onClick={this.toggleView}> Unassigned </ListGroupItem>
        <Collapse isOpen={this.state.collapse} >
        
          {this.props.unassignedTasks.map((task, i) => {
            return (     
              <ListGroupItem key={i} className="unassignedTask" > 
              <Row>
                <Col>Task: <em >{task.task}</em></Col>
                <Col> Deadline: <a style={{ color: 'red' }}> {task.deadline}</a></Col>
              </Row>
            </ListGroupItem>
            )
          })}
        </Collapse>
      </ListGroup>
      )
    } else {
      return (
      <ListGroup>
        <ListGroupItem className="allTasks" onClick={this.toggleView}> Completed </ListGroupItem>
        <Collapse isOpen={this.state.collapse} >
          {this.props.completedTasks.map((task, i) => {
            return (     
              <ListGroupItem key={i} className="completedTask" > 
              <Row>
                <Col>Task: <em >{task.task}</em></Col>
                <Col> Completed: <a> {task.completeDate.split('T')[0]}</a></Col>
              </Row>
            </ListGroupItem>
            )
          })}
        </Collapse>
      </ListGroup>
      )
    }
  } 
}

export default OtherTaskCards;