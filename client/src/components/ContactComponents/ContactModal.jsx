import React from 'react';
const axios = require('axios');
import { 
  Button, Modal, 
  ModalHeader, ModalBody, 
  ModalFooter, Input, InputGroupAddon, InputGroupText,
  Label, Form, InputGroup } from 'reactstrap';

class ContactModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      company: '',
      phone: '',
      email: ''
    };

    this.updateContact = this.updateContact.bind(this);
    this.saveContact = this.saveContact.bind(this);
  }

  updateContact(e) {
    this.setState({ [e.target.name] : e.target.value });
  }

  saveContact() {
    axios.post('/api/addContact', { newContact: this.state })
      .then(() => this.props.submit("contact"))
  }
  
  render() {
    return (
      <div>
        <Modal isOpen={this.props.status} >
          <ModalHeader className="text-center"> Create A New Contact </ModalHeader>
          <ModalBody>
            <Form>
              
            <Label for="name">Name</Label>
            <Input name="name" placeholder="Contact's Name" onChange={this.updateContact} />

            <Label for="company">Comany</Label>
            <Input name="company" placeholder="Company" onChange={this.updateContact} />

            <Label for="phone">Phone</Label>
            <Input name="phone" placeholder="xxx-xxx-xxxx" type="tel" onChange={this.updateContact} />

            <Label for="email">E-mail</Label>
            <Input name="email" placeholder="xxxxxx@company.com" type="email" onChange={this.updateContact} />

            </Form>
          </ModalBody>
          <ModalFooter>
            <Button size="sm" title="contact" color="success" onClick={this.saveContact} >Create</Button>
            <Button size="sm" title="contact" onClick={this.props.toggleContactModal} >Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}

export default ContactModal;
