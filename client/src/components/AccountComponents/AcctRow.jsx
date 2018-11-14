import React from 'react';
import { Input } from 'reactstrap';

class AcctRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      SecIns: 0,
      NewTotal: 0,
      OF: 0.00, 
      Allowed: 0, 
      WO: 0, 
      Primary: 0, 
      PP: 0, 
      Paid: 0,
      Total: 0,
      DOS: ''
    };
    this.changeValue = this.changeValue.bind(this);
    this.calculateTotal = this.calculateTotal.bind(this);
    this.calculateWriteOff = this.calculateWriteOff.bind(this);
  }

  changeValue(e) {
    this.setState({ [`${e.target.name}`] : e.target.value }, () => this.calculateWriteOff());
  }

  calculateWriteOff() {
    // Take Office Fee - Allowed Amount = Writeoff
    let OfficeFee = this.state.OF;
    let Allowed = this.state.Allowed;
    let WriteOff = OfficeFee - Allowed;
    this.setState({ WO : WriteOff }, () => this.calculateTotal());
  }

  calculateTotal() {
    // allowed - primary = pp
    let Allowed = this.state.Allowed;
    let Primary = this.state.Primary;
    let PP = Allowed - Primary;
    
    this.setState({ PP : PP }, () => {
      // pp - paid = total
      let Paid = this.state.Paid;
      let Calc = this.state.PP - Paid;
      
      //set total state
      this.setState({ Total : Calc }, () => {
        //calculate secondary
        if (this.props.sec) {
          let preTotal = this.state.Total;
          let Sec = this.state.SecIns;
          let NewCalc = preTotal - Sec;
          this.setState({ NewTotal: NewCalc }, () => {
            // Update the table in AcctAudit
            this.props.updateTable(this.props.name, this.state);
          });
        } else {
            // Update the table in Account Audit
          this.props.updateTable(this.props.name, this.state);
        }
      });
    });
  }

  render() {
   return ( 
    <tr>
      <td><Input name="DOS" placeholder="DOS" onChange={(e) => this.setState({ DOS: e.target.value })} /></td>
      { this.props.off ? <td> <Input name="OF" placeholder="0.00" onChange={this.changeValue}/> </td> : null }
      <td> <Input name="Allowed" placeholder="0.00" onChange={this.changeValue}/> </td> 
      { this.props.off ? <td name="WO" className="text-center"><h6>{this.state.WO.toFixed(2)}</h6></td> : null }
      <td> <Input name="Primary" placeholder="0.00" onChange={this.changeValue}/></td>
      <td name="PP" className="text-center"> <h6>{this.state.PP.toFixed(2)}</h6></td>
      { this.props.sec ? <td><Input name="SecIns" placeholder="0.00" onChange={this.changeValue}/></td> : null }
      <td> <Input name="Paid" placeholder="0.00" onChange={this.changeValue}/></td>
      { this.props.sec ? null : <td name="Total" className="text-center"><h6>{this.state.Total.toFixed(2)}</h6></td> }
      { this.props.sec ? <td name="NewTotal"className="text-center"><h6>{this.state.NewTotal.toFixed(2)}</h6></td> : null }
    </tr>
    )
  }
}

export default AcctRow;
