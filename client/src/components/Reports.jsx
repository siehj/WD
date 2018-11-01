import React from 'react';
import Generator from './NestedComponents/ReportGen.jsx';
import ReportInput from './NestedComponents/ReportInput.jsx';
import ReportGraphs from './NestedComponents/ReportGraph.jsx';
import { Container, Row, Col } from 'reactstrap';

class Reports extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      miniScreen : "",
      index: 0
    };
    this.changeMiniScreen = this.changeMiniScreen.bind(this);
  }
  changeMiniScreen(e){
    this.setState({ index: e.target.target });
    this.setState({ miniScreen: e.target.title });
  }
  
  render() {
    console.log(this.state.index);
    return (
      <div >
        <Container>
          <Row className="nav nav-tabs">
          <Col className="text-center" >
            {
              this.props.report.map((rep, i) => { 
                return <a className="option" target={i} key={rep} onClick={this.changeMiniScreen} title={rep} style={{ fontWeight: Number(this.state.index) === i ? 'bold' : null }} >{rep}</a> })
            }
          </Col>
          </Row>
        </Container>    

        {/* Displayed mini screen */}
        <div className="miniMain" >
          {this.state.miniScreen === "Input" ? <ReportInput/> : 
          this.state.miniScreen === "Generate" ? <Generator/> : <ReportGraphs/> 
          }
        </div>
      </div>
    )
  }
}


export default Reports; 