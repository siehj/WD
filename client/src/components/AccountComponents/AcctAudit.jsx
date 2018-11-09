import React from 'react';
import { Table, Button, Input } from 'reactstrap';

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
      NumberOfRows: 0
    };
    this.showOption = this.showOption.bind(this);
  }

  showOption(e) {
    e.target.name === 'officeOptions' ? this.setState({ officeOptions : !this.state.officeOptions }) : this.setState({ secondaryOption : !this.state.secondaryOption });
  }

  render() {
    return (
      <div>
        <Table>
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

        </Table>
        <div>
          <Button color="success" size="sm" >Add Row</Button>
          <Button color="secondary" size="sm" name="officeOptions" onClick={this.showOption} >Office Options</Button>
          <Button color="secondary" size="sm" name="secondaryOptions" onClick={this.showOption} >Secondary Options</Button>
        </div>
        <div>
          <Button name="" outline color="secondary" block >Export</Button>
          <Button name="" outline color="success" block onClick={this.props.goBack} >Go Back</Button>
        </div>
      </div>
    )
  }
}

export default AcctAudit;
