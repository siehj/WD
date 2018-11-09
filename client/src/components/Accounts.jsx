import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import ARTool from './AccountComponents/AgingReportTool.jsx';
import BillingTool from './AccountComponents/BillingTool.jsx';
import AccountAuditTool from './AccountComponents/AuditTools.jsx';

class Accounts extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      miniScreen : 'Audit',
      index: 0,
      agingReportData: []
    };
    this.changeMiniScreen = this.changeMiniScreen.bind(this);
  }

  componentDidMount() {
    // this.setState({ miniScreen: this.props.accounts[0]})
  }

  changeMiniScreen(e){
    this.setState({ index: e.target.target });
    this.setState({ miniScreen: e.target.title });
  }

  render() {
    return (
      <div>
        <Container>
          <Row className="nav nav-tabs">
            <Col className="text-center" >
              {
                this.props.accounts.map((rep, i) => { return <a className="option" target={i} key={rep} onClick={this.changeMiniScreen} style={{ fontWeight: Number(this.state.index) === i ? 'bold' : null }} title={rep}>{rep}</a> })
              }
            </Col>
          </Row>
        </Container>
        <div className="miniMain" >
          {this.state.miniScreen === 'Audit' ? <AccountAuditTool/> : 
          this.state.miniScreen === 'A/R' ? <ARTool/> : <BillingTool/> }
        </div>
      </div>
    )
  }
}


export default Accounts; 