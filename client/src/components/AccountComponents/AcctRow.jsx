import React from 'react';

class AcctRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
   return ( 
    <tr>
      <td>Date</td>
      { this.props.off ? <td>Office Fee</td> : null }
      { this.props.off ? <td>Allowed</td> : null }
      { this.props.off ? <td>Write Off</td> : null }
      <td>Primary</td>
      <td>PP</td>
      <td>Paid</td>
      { this.props.sec ? null : <td>Total</td> }
      { this.props.sec ? <td>Secondary</td> : null }
      { this.props.sec ? <td>Total</td> : null }
    </tr>
    )
  }
}

export default AcctRow;
