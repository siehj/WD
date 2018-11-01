import React from 'react';
import { ListGroup, ListGroupItem, Badge, Collapse } from 'reactstrap';

class TaskCard extends React.Component {
  constructor(props){
    super(props);
    this.state = { collapse : false };
    this.toggleView = this.toggleView.bind(this);

  }
  toggleView(e) {
    this.setState({ collapse: !this.state.collapse });
    // console.log(this.state.collapse);
    // console.log(!this.state.collapse);
  }
  render(){
    return (
      <ListGroup id="taskGroup" >
        <ListGroupItem onClick={this.toggleView} className="justify-content-between">{this.props.employee} <Badge pill>{this.props.tasks.length}</Badge></ListGroupItem>
        <Collapse isOpen={this.state.collapse}>
          {this.props.tasks.map((task, i) => {
            return <ListGroupItem key={i} >{task}</ListGroupItem>
          })}
        </Collapse>
      </ListGroup>
    )
  }
}

export default TaskCard;