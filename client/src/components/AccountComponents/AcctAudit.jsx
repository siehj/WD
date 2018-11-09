import React from 'react';
import { Table, Button, Input, Row, Col } from 'reactstrap';
import RowGenerator from './RowGenerator.jsx';

class AcctAudit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      officeOptions: false, 
      secondaryOption: false, 
      SecIns: 0,
      NewTotal: 0,
      OF: 0, 
      Allowed: 0, 
      WO: 0, 
      Primary: 0, 
      PP: 0, 
      Paid: 0,
      Total: 0,
      NumberOfCols: 0,
      NumberOfRows: 1
    };
    this.showOption = this.showOption.bind(this);
    this.addRow = this.addRow.bind(this);
    this.calculate = this.calculate.bind(this);
  }

  componentDidMount() {

  }
  
  calculate(obj) {

  }

  addRow() {
    this.setState({ NumberOfRows : this.state.NumberOfRows+1 });
  }

  showOption(e) {
    e.target.name === 'officeOptions' ? this.setState({ officeOptions : !this.state.officeOptions }) : this.setState({ secondaryOption : !this.state.secondaryOption });
  }

  render() {
    return (
      <div>
        <Table striped >
          <thead>
            <tr>
              <th>Date</th>
              { this.state.officeOptions ? <th>Office Fee</th> : null }
              <th>Allowed</th>
              { this.state.officeOptions ? <th>Write Off</th> : null }
              <th>Primary</th>
              <th>PP</th>
              { this.state.secondaryOption ? null : <th>Total</th> }
              { this.state.secondaryOption ? <th>Secondary</th> : null }
              <th>Paid</th>
              { this.state.secondaryOption ? <th>Total</th> : null }
            </tr>
          </thead>
          <RowGenerator num={this.state.NumberOfRows} sec={this.state.secondaryOption} off={this.state.officeOptions} />
          <thead>
            <tr style={{ fontSize: '15px' }} >
              <th></th>
              { this.state.officeOptions ? <th>{this.state.OF.toFixed(2)}</th> : null }
              <th>{this.state.Allowed.toFixed(2)}</th>
              { this.state.officeOptions ? <th>{this.state.WO.toFixed(2)}</th> : null }
              <th>{this.state.Primary.toFixed(2)}</th>
              <th>{this.state.PP.toFixed(2)}</th>
              { this.state.secondaryOption ? null : <th>{this.state.Total.toFixed(2)}</th> }
              { this.state.secondaryOption ? <th>{this.state.SecIns.toFixed(2)}</th> : null }
              <th>{this.state.Paid.toFixed(2)}</th>
              { this.state.secondaryOption ? <th>{this.state.NewTotal.toFixed(2)}</th> : null }
            </tr>
          </thead>
        </Table>
        <div>
          <Button color="success" onClick={this.addRow} >Add Row</Button>
        </div>
        <div>
          <Row style={{ marginTop: '10px', marginBottom: '10px' }} >
            <Col>
              <Button outline color="secondary" block name="officeOptions" onClick={this.showOption} >Office Options</Button>
            </Col>  
            <Col>
              <Button outline color="secondary" block name="secondaryOptions" onClick={this.showOption} >Secondary Options</Button>
            </Col>  
          </Row>
          <Button name="" outline color="secondary" block >Export As Excel</Button>
          <Button name="" outline color="success" block onClick={this.props.goBack} >Go Back</Button>
        </div>
      </div>
    )
  }
}

export default AcctAudit;
