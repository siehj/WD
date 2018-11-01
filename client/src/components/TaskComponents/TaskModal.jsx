import React from 'react';
import { 
  Button, Modal, 
  ModalHeader, ModalBody, 
  ModalFooter, Input, InputGroupAddon, InputGroupText,
  Label, Form, InputGroup } from 'reactstrap';

const TaskModal = (props) => {
  return (
    <div>
      <Modal isOpen={props.status} >
        <ModalHeader className="text-center"> Create A New Task </ModalHeader>
        <ModalBody>
          <Form>
            <InputGroup>
            <InputGroupAddon addonType="prepend" >
              <InputGroupText>Task</InputGroupText>
            </InputGroupAddon>
              <Input/>
            </InputGroup>
            <InputGroup>
            <InputGroupAddon addonType="prepend" >
              <InputGroupText>Note</InputGroupText>
            </InputGroupAddon>
              <Input/>
            </InputGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button size="sm" title="task" color="success" >Create</Button>
          <Button size="sm" title="task" onClick={props.toggleTaskModal} >Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default TaskModal;
