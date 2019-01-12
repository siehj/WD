import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import ARTool from './AccountComponents/AgingReportTool.jsx';
import BillingTool from './AccountComponents/BillingTool.jsx';
import AccountAuditTool from './AccountComponents/AcctTools.jsx';
import AccountModal from './AccountComponents/AccountModal.jsx';
const axios = require('axios');

class Accounts extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      miniScreen : 'Audit',
      index: 0,
      agingReportData: [],
      acctsForAudits: [],
      billingAccts: [],
      date: '',
      modalOpen: false, 
      table: [] 
    };
    this.changeMiniScreen = this.changeMiniScreen.bind(this);
    this.getGoogleAR = this.getGoogleAR.bind(this);
    this.openModal = this.openModal.bind(this);
    this.grabTable = this.grabTable.bind(this);
  }

  componentDidMount() {
    let today = new Date().toString();
    this.setState({ date: today });
    // this.setState({ miniScreen: this.props.accounts[0]})
  }

  changeMiniScreen(e){
    this.setState({ index: e.target.target });
    this.setState({ miniScreen: e.target.title });
  }

  getGoogleAR() {

  }

  openModal() {
    this.setState({ modalOpen: !this.state.modalOpen });
  }

  grabTable(theTable) {
    this.setState({ table : theTable }, () => this.openModal());
  }


  render() {
    return (
      <div>
        {this.state.modalOpen ? <AccountModal status={this.state.modalOpen} openModal={this.openModal} /> : null }
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
          {this.state.miniScreen === 'Audit' ? <AccountAuditTool grabTable={this.grabTable} /> : 
          this.state.miniScreen === 'A/R' ? <ARTool getGoogleAR={this.getGoogleAR} /> : <BillingTool/> }
        </div>
      </div>
    )
  }
}


export default Accounts; 