import React from 'react';
import { Row, Col, Button } from 'reactstrap';
import Calculator from './SimpleCalculator.jsx';

class AccountAuditTool extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tool: ''
    };
    this.chooseTool = this.chooseTool.bind(this);
  }

  chooseTool(e) {
    this.setState({ tool: e.target.name });
  }

  render() {
    return (
    <div style={{ marginTop: '5px' }} >
    {
      this.state.tool === 'calculator' ? <Calculator goBack={this.chooseTool} />
      : this.state.tool === 'audit' ? <div>Audit</div> 
      :
      (
        <div className="text-center" >
          <section >
            <a>There are two main tools available for use.</a>
          </section>
          <Row style={{ marginTop: '30px' }} >
            <Col>
              <h4>Calculator</h4>
              <p> Allows for a quick audit of one instance.
                Enter the Office Fee, Allowed Amount, Insurance Payment, and amount paid by the patient. 
                Write Off, Patient Portion and Credit/Balance will be calculated.
              </p>
              <Button outline color="success" name="calculator" onClick={this.chooseTool} > Calculator </Button>
            </Col>
            <Col>
              <h4> Full Account Audit </h4>
              <p>An overall account audit tool to calculate for the data by date of service.</p>
              <Button outline color="success"> Account Audit </Button>
            </Col>
          </Row>
        </div>
      )  
    }
    </div>
    )
  }
}

export default AccountAuditTool;