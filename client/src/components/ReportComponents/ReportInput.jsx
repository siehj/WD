import React from 'react';
import { Row, Col, Form, FormGroup, CustomInput } from 'reactstrap';

const ReportInput = (props) => {
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
         <p>Show and choose the sheet to save it to.</p>
      </div>
      {/* <div className="text-center" >
        <p>Show new accounts to be audited</p>
      </div> */}
    </div>
  )
}

export default ReportInput;