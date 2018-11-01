import React from 'react';
import { 
  Button, Modal, 
  ModalHeader, ModalBody, 
  ModalFooter, Input, 
  Label, Form, FormGroup } from 'reactstrap';

const TaskModal = (props) => {
  return (
    <div>
      <Modal isOpen={props.status} >
        <ModalHeader>
        </ModalHeader>
        <ModalBody>BODY</ModalBody>
        <ModalFooter>
          <Button title="task" >Create</Button>
          <Button title="task" onClick={props.toggleTaskModal} >Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default TaskModal;
