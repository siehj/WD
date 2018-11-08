import React from 'react';
import { Card, Badge, CardTitle, CardText, CardSubtitle, CardBody, Row, Col, Input, Button } from 'reactstrap';

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      contact: {}
    };
    this.updateContact = this.updateContact.bind(this);
    this.editMode = this.editMode.bind(this);
  }

  updateContact(e) {
    console.log(e.target.name)
    console.log(e.target.value)
  }

  editMode() {
    this.setState({ edit: !this.state.edit });
  }

  render() {
    return (
      <Card className="contactCard" >
        <CardBody>
          <CardTitle className="text-center" style={{ fontSize: '20px' }} onClick={this.editMode} >{this.props.contact.name} <Badge style={{ fontSize: '10px' }} >{this.props.contact.type_id}</Badge></CardTitle> 
          <Row style={{ fontSize: '15px' }} className="text-center" onClick={this.editMode} >
            <Col>
              <a>Company: </a>
              <CardText>{this.props.contact.company}</CardText>
            </Col>
            <Col>
              <a>Phone#:</a>
              <CardText>{this.props.contact.phone}</CardText>
            </Col>
            <Col>
              <a>E-mail:</a>
              <CardText> {this.props.contact.email}</CardText>
            </Col>
          </Row>
          {
            this.state.edit ? 
            <div>
              <Row className="text-center" >
                <Col className="editContact"><Input name="company" onChange={this.updateContact} /></Col>
                <Col className="editContact"><Input name="phone" onChange={this.updateContact} /></Col>
                <Col className="editContact"><Input name="email" onChange={this.updateContact} /></Col>
              </Row> 
              <Row style={{ paddingTop: '5px' }} >
               <Col className="text-center" >
                <Button size="sm" outline color="success" onClick={() => this.props.sendContactUpdate(this.state.contact)} >Confirm</Button> 
                <Button size="sm" onClick={this.editMode} >Cancel</Button> 
               </Col> 
              </Row>
            </div>
            : null
          }
        </CardBody>
      </Card>
    )
  }
}

export default SearchResults;
