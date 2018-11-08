import React from 'react';
const axios = require('axios');
import { Button, Container, Row, Col, Form, FormGroup, Label, Input, InputGroup, InputGroupAddon, InputGroupButtonDropdown, DropdownToggle, DropdownMenu } from 'reactstrap';
import SearchDropdown from './ContactComponents/SearchDropdown.jsx';

class Contacts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false,
      allContacts: [],
      query: '',
      searchedContact: []
    };
    this.toggleDropDown = this.toggleDropDown.bind(this);
  }
  
  componentDidMount() {
    axios.get('/api/getContacts')
      .then(({ data }) => console.log(data))
  }
  
  toggleDropDown() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }



  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col className="text-right">
              <Button size="sm" color="success" title="contact" onClick={this.props.toggleContactModal} >NEW CONTACT +</Button>
            </Col>
          </Row>
        </Container>
        <Form>
          <FormGroup className="text-center" >
            <Label>Search</Label>
              <InputGroup >
                {/* <InputGroupButtonDropdown addonType="append" isOpen={this.state.dropdownOpen} size="sm" toggle={this.toggleDropDown}>
                  <DropdownToggle caret>
                    Type
                    <select> <option value="HI"></option> </select>
                  </DropdownToggle>
                </InputGroupButtonDropdown> */}
                <Input type="text" name="ReportQuery" id="ReportQuery"/>
                <InputGroupAddon addonType="append"><Button outline color="secondary" type="button" id="QueryBtn" size="sm" >Submit</Button></InputGroupAddon>
              </InputGroup>
          </FormGroup>
        </Form>
      </div>
    )
  }
}

export default Contacts; 