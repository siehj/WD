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
  }

  componentDidMount() {

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
              { this.state.officeOptions ? <th>Allowed</th> : null }
              { this.state.officeOptions ? <th>Write Off</th> : null }
              <th>Primary</th>
              <th>PP</th>
              <th>Paid</th>
              { this.state.secondaryOption ? null : <th>Total</th> }
              { this.state.secondaryOption ? <th>Secondary</th> : null }
              { this.state.secondaryOption ? <th>Total</th> : null }
            </tr>
          </thead>
          <RowGenerator num={this.state.NumberOfRows} sec={this.state.secondaryOption} off={this.state.officeOptions} />
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
