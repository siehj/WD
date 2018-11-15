import React from 'react';
import { Table, Button, Input } from 'reactstrap';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      col: [ "Office Fee", "Allowed", "Writeoff", "Primary", "PP", "Paid", "Total" ],
      SecIns: 0,
      NewTotal: 0,
      OF: 0.00, 
      Allowed: 0, 
      WO: 0, 
      Primary: 0, 
      PP: 0, 
      Paid: 0,
      Total: 0,
      secondary: false
    };
    this.calculateWriteOff = this.calculateWriteOff.bind(this);
    this.calculateTotal = this.calculateTotal.bind(this);
    this.addSecondary = this.addSecondary.bind(this);
    this.changeValue = this.changeValue.bind(this);
    this.clear = this.clear.bind(this);
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
      this.setState({ Total : Calc }, () => {
        if (this.state.secondary) {
          let preTotal = this.state.Total;
          let Sec = this.state.SecIns;
          let NewCalc = preTotal - Sec;
          this.setState({ NewTotal: NewCalc });
        }
      });
    });
  }
  
  changeValue(e) {
    this.setState({ [`${e.target.name}`] : e.target.value }, () => this.calculateWriteOff());
  }

  addSecondary() {
    this.setState({ secondary: !this.state.secondary });
  }

  clear() {
    this.setState({ SecIns: 0,
      NewTotal: 0,
      OF: 0.00, 
      Allowed: 0, 
      WO: 0, 
      Primary: 0, 
      PP: 0, 
      Paid: 0,
      Total: 0 })
  }

  render() {
    return (
      <div>
        <Table>
          <thead>
            <tr>
              {
                this.state.col.map((col, i) => {
                  return <th key={i}>{col}</th>
                })
              }
              { this.state.secondary ? <th>Secondary</th> : null}
              { this.state.secondary ? <th>New Total</th> : null}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td> <Input type="number" name="OF" placeholder="0.00" onChange={this.changeValue}/> </td>
              <td> <Input type="number" id="calcAll" name="Allowed" placeholder="0.00" onChange={this.changeValue}/> </td>
              <td name="WO" className="text-center"><h6>{this.state.WO.toFixed(2)}</h6></td>
              <td> <Input type="number" id="calcPri" name="Primary" placeholder="0.00" onChange={this.changeValue}/></td>
              <td name="PP" className="text-center"> <h6>{this.state.PP.toFixed(2)}</h6></td>
              <td> <Input type="number" id="calcPaid" name="Paid" placeholder="0.00" onChange={this.changeValue}/></td>
              <td name="Total" className="text-center"><h6>{this.state.Total.toFixed(2)}</h6></td>
              { this.state.secondary ? <td><Input type="number" id="calcSec" name="SecIns" placeholder="0.00" onChange={this.changeValue}/></td> : null}
              { this.state.secondary ? <td name="NewTotal"className="text-center"><h6>{this.state.NewTotal.toFixed(2)}</h6></td> : null}
            </tr>
          </tbody>
        </Table>
        <div>
          <Button color="success" block onClick={this.clear} >Clear</Button>
          <Button name="" outline color="secondary"  block onClick={this.addSecondary}> {this.state.secondary ? "Remove" : "Add" } Secondary Insurance</Button>
          <Button name="" outline color="success"  block onClick={this.props.goBack} >Go Back</Button>
        </div>
      </div>
    )
  }
}

export default Calculator;
