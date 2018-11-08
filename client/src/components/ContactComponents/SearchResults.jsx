import React from 'react';
import { Card, Badge, CardTitle, CardText, CardSubtitle, CardBody, Row, Col } from 'reactstrap';

const SearchResults = (props) => {
  return (
    <Card className="contactCard">
      <CardBody>
        
        <CardTitle className="text-center" style={{ fontSize: '20px' }} >{props.contact.name} <Badge style={{ fontSize: '10px' }} >{props.contact.type_id}</Badge></CardTitle> 
        <Row style={{ fontSize: '15px' }} className="text-center" >
          <Col>
            <a>Company: </a>
            <CardText>{props.contact.company}</CardText>
          </Col>
          <Col>
            <a>Phone#:</a>
            <CardText>{props.contact.phone}</CardText>
          </Col>
          <Col>
            <a>E-mail:</a>
            <CardText> {props.contact.email}</CardText>
          </Col>
        </Row>
      </CardBody>
    </Card>
  )
}

export default SearchResults;
