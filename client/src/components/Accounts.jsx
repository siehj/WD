import React from 'react';
import AccountAuditTool from './NestedComponents/ReportAcctAudit.jsx';
import { Container, Row, Col } from 'reactstrap';

class Accounts extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      miniScreen : '',
      index: 0
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
          {this.state.miniScreen === 'Audit' ? <AccountAuditTool/> : null}
        </div>
      </div>
    )
  }
}


export default Accounts; 