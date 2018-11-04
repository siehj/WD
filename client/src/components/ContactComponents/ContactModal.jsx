import React from 'react';
import { 
  Button, Modal, 
  ModalHeader, ModalBody, 
  ModalFooter, Input, InputGroupAddon, InputGroupText,
  Label, Form, InputGroup } from 'reactstrap';

const ContactModal = (props) => {
  return (
    <div>
      <Modal isOpen={props.status} >
        <ModalHeader className="text-center"> Create A New Contact </ModalHeader>
        <ModalBody>
          <Form>
            <InputGroup>
            <InputGroupAddon addonType="prepend" >
              <InputGroupText>Contact</InputGroupText>
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
          <Button size="sm" title="contact" color="success" >Create</Button>
          <Button size="sm" title="contact" onClick={props.toggleContactModal} >Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default ContactModal;
