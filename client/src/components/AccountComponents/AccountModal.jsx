import React from 'react';
import { 
  Button, Modal, 
  ModalHeader, ModalBody, 
  ModalFooter, Input, 
  Label, Form } from 'reactstrap';

class AccountModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Modal isOpen={this.props.status} >
          <ModalHeader className="text-center"> Create An Excel Sheet </ModalHeader>
          <ModalBody>
            <Form>
                <Label for="task">Task</Label>
                {/* <Input name="task" placeholder="Task title..." onChange={this.updateTask} /> */}
  
                <Label for="note">Note</Label>
                {/* <Input type="textarea" name="note" placeholder="Describe the task..." onChange={this.updateTask} /> */}
  
                <Label for="date">Due Date</Label>
                {/* <Input type="date" name="deadline" id="exampleDate" placeholder="date placeholder" onChange={this.updateTask} /> */}

            </Form>
          </ModalBody>
          <ModalFooter>
            <Button title="task" color="success"  >Create</Button>
            <Button title="task" onClick={this.props.openModal} >Cancel</Button>
          </ModalFooter>
        </Modal>
    )
  }
}

export default AccountModal;