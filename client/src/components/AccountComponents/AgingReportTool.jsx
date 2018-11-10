import React from 'react';
import { CustomInput, Form, FormGroup, Label, Row, Col, Input, InputGroup, Button } from 'reactstrap';

const ARTool = (props) => {
  return (
    <div>
      <Row>
        <Col>
          <Form>
            <FormGroup>
              <CustomInput type="file" id="FileBrowser" name="customFile" />
            </FormGroup>
          </Form>
        </Col>
      </Row>
     
      <div className="text-center" >
         <p>Show and choose the sheet to compare</p>
      </div>
      <div className="text-center" >
        <p>Show new accounts to be audited</p>
      </div>
    </div>
  )
}

export default ARTool;