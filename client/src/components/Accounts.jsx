import React from 'react';
import AccountAuditTool from './NestedComponents/ReportAcctAudit.jsx';
import { Container, Row, Col } from 'reactstrap';

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
        <Container>
          <Row className="nav nav-tabs">
            <Col className="text-center" >
              {
                this.props.accounts.map((rep, i) => { return <a className="option" target={i} key={rep} onClick={this.changeMiniScreen} title={rep}>{rep}</a> })
              }
            </Col>
          </Row>
        </Container>
          {this.state.miniScreen === 'Audit' ? <AccountAuditTool/> : null}
      </div>
    )
  }
}


export default Accounts; 