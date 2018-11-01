import React from 'react';
import AccountAuditTool from './NestedComponents/ReportAcctAudit.jsx';

class Accounts extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      miniScreen : ''
    };
  }

  componentDidMount() {
    this.setState({ miniScreen: this.props.accounts[0]})
  }

  changeScreen(e) {
    this.setState({ miniScreen: e.target.name });
  }

  render() {
    return (
      <div>
        <ul className="nav nav-tabs">
          {
            this.props.accounts.map((rep, i) => {
            return i === 0 ? <li className="active" key={i}><a className="tabs" onClick={this.changeScreen.bind(this)} name={rep} >{rep}</a></li> : <li key={i}><a>{rep}</a></li>
            })
          }
        </ul>
          {this.state.miniScreen === 'Audit' ? <AccountAuditTool/> : null}
      </div>
    )
  }
}


export default Accounts; 