import React from 'react';
import { Table, Button, Input } from 'reactstrap';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      col: {
        "Office Fee": 0,
        Allowed: 0,
        "Writeoff": 0,
        Primary: 0,
        PP: 0,
        Paid: 0,
        Total: 0
      },
      SecIns: 0,
      NewTotal: 0,
      secondary: false
    };
    this.calculateWriteOff = this.calculateWriteOff.bind(this);
    this.calculateTotal = this.calculateTotal.bind(this);
    this.addSecondary = this.addSecondary.bind(this);
    this.changeValue = this.changeValue.bind(this);
  }

  calculateWriteOff() {
    // Take Office Fee - Allowed Amount = Writeoff
  }

  calculateTotal() {
    if (!this.state.secondary) {
      // 

    } else {
      // must calculate with the secondary numbers 
    }
  }
  
  changeValue(e) {
    console.log(e.target.name);
    console.log(e.target.value);
  }

  addSecondary() {
    this.setState({ secondary: !this.state.secondary });
  }

  render() {
    return (
      <div>
        <Table>
          <thead>
            <tr>
              {
                Object.keys(this.state.col).map((col, i) => {
                  return (
                    <th key={i} >{col}</th>
                    )
                  })
                }
              { this.state.secondary ? <th>Secondary</th> : null}
              { this.state.secondary ? <th>New Total</th> : null}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td> <Input type="number" name="Office Fee" placeholder="0.00" onChange={this.changeValue}/> </td>
              <td> <Input type="number" name="Allowed" placeholder="0.00" onChange={this.changeValue}/> </td>
              <td name="Write-off"></td>
              <td> <Input type="number" name="Primary" placeholder="0.00" onChange={this.changeValue}/></td>
              <td> <Input type="number" name="PP" placeholder="0.00" onChange={this.changeValue}/></td>
              <td> <Input type="number" name="Paid" placeholder="0.00" onChange={this.changeValue}/></td>
              <td name="Total"></td>
              { this.state.secondary ? <td><Input type="number" name="SecIns" placeholder="0.00" onChange={this.changeValue}/></td> : null}
              { this.state.secondary ? <td name="NewTotal" >0.00</td> : null}
            </tr>
          </tbody>
        </Table>
        <div>
          <Button name="" outline color="secondary"  block onClick={this.addSecondary}> {this.state.secondary ? "Remove" : "Add" } Secondary Insurance</Button>
          <Button name="" outline color="success"  block onClick={this.props.goBack} >Go Back</Button>
        </div>
      </div>
    )
  }
}

export default Calculator;
