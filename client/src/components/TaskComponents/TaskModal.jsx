import React from 'react';
const axios = require('axios');
import { 
  Button, Modal, 
  ModalHeader, ModalBody, 
  ModalFooter, Input, InputGroupAddon, InputGroupText,
  Label, Form, InputGroup } from 'reactstrap';
import { ETIME } from 'constants';

class TaskModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      task: '', 
      note: '', 
      deadline: '', 
      completed: false, 
      assignedTo: 'unassigned' 
    };
    this.updateTask = this.updateTask.bind(this);
    this.sendTask = this.sendTask.bind(this);
  }

  updateTask(e) {
    this.setState({ [e.target.name] : e.target.value });
  }

  sendTask() {
    axios.post('/api/saveTask', { newTask: this.state })
      .then(this.props.submit('task'))
      .catch(err => console.log);
  }

  render() {
    return (
      <div>
        <Modal isOpen={this.props.status} >
          <ModalHeader className="text-center"> Create A New Task </ModalHeader>
          <ModalBody>
            <Form>
                <Label for="task">Task</Label>
                <Input name="task" placeholder="Task title..." onChange={this.updateTask} />
  
                <Label for="note">Note</Label>
                <Input type="textarea" name="note" placeholder="Describe the task..." onChange={this.updateTask} />
  
                <Label for="date">Due Date</Label>
                <Input type="date" name="deadline" id="exampleDate" placeholder="date placeholder" onChange={this.updateTask} />
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button size="sm" title="task" color="success" onClick={this.sendTask} >Create</Button>
            <Button size="sm" title="task" onClick={this.props.toggleTaskModal} >Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}

export default TaskModal;
