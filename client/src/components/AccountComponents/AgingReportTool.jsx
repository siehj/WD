import React from 'react';
import { Container, Row, Col, Input, InputGroup, Button } from 'reactstrap';

const ARTool = (props) => {
  return (
    <div>
      <Container>
        <Row>
          <InputGroup>
            <Input type="file" />
          </InputGroup>

        </Row>
      </Container>
     

    </div>
  )
}

export default ARTool;