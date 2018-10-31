import React from 'react';
import Generator from './NestedComponents/ReportGen.jsx';

class Reports extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      miniScreen : ""
    };
  }
  render() {
    return (
      <div>
        <ul className="nav nav-tabs">
          {
            this.props.report.map((rep, i) => {
            return i === 0 ? <li className="active" key={i}><a>{rep}</a></li> : <li key={i}><a>{rep}</a></li>
            })
          }
        </ul>
        <Generator/>
  
      </div>
    )
  }
}


export default Reports; 