import React from 'react';
import { Container, Row, Col, Input, InputGroup, Button } from 'reactstrap';

const ARTool = (props) => {
  return (
    <div>
      <Container>
        <Row>
          <InputGroup className="text-center" >
            <Input type="file" size="sm" />
          </InputGroup>

        </Row>
      </Container>
     

    </div>
  )
}

export default ARTool;