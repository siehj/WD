import React from 'react';
import { Button, Form, FormGroup, Label, Input, InputGroup, InputGroupAddon, FormText } from 'reactstrap';

const Generator = (props) => {
  return (
    <div>
      <Form>
        <FormGroup className="text-center" >
          <Label>Search</Label>
           <InputGroup >
              <Input type="text" name="ReportQuery" id="ReportQuery"/>
              <InputGroupAddon addonType="append"><Button outline color="secondary" type="button" id="QueryBtn" size="sm" >Submit</Button></InputGroupAddon>
           </InputGroup>
        </FormGroup>
      </Form>
    </div>
  )
}

export default Generator;