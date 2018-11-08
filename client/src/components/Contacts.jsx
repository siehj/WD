import React from 'react';
const axios = require('axios');
import { Button, Container, Row, Col, Form, FormGroup, Label, Input, InputGroup, InputGroupAddon, InputGroupButtonDropdown, DropdownToggle, DropdownMenu } from 'reactstrap';
import SearchResults from './ContactComponents/SearchResults.jsx';

class Contacts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false,
      query: '',
      searchedContact: []
    };
    this.updateQuery = this.updateQuery.bind(this);
    this.searchContact = this.searchContact.bind(this);
  }
  
  componentDidMount() {
    axios.get('/api/getContacts')
      .then(({ data }) => this.setState({ searchedContact: data }));
  }
  
  updateQuery(e) {
    this.setState({ query: e.target.value });
  }

  searchContact() {
    axios.post('/api/searchContacts', { query: this.state.query })
      .then(({ data }) => this.setState({ searchedContact: data }))
      .then(() => this.setState({ query: '' }));
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
                <Input type="text" name="ReportQuery" id="ReportQuery" placeholder={this.state.query} onChange={this.updateQuery} />
                <InputGroupAddon addonType="append">
                  <Button outline color="secondary" type="button" id="QueryBtn" size="sm" onClick={this.searchContact} >Submit</Button>
                </InputGroupAddon>
              </InputGroup>
          </FormGroup>
        </Form>

        <div className="contactResults">
          {
            this.state.searchedContact.map((contact, i) => {
              return <SearchResults key={i} contact={contact} />
            })
          }
        </div>
      </div>
    )
  }
}

export default Contacts; 