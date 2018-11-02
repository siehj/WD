import React from 'react';
import Generator from './ReportComponents/ReportGen.jsx';
import ReportInput from './ReportComponents/ReportInput.jsx';
import ReportGraphs from './ReportComponents/ReportGraph.jsx';
import { Container, Row, Col } from 'reactstrap';

class Reports extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      miniScreen : "",
      index: 0,
      BarGraphInfo: {
        YP: [ {x: 1, y: 500000}, {x: 2, y: 583578}, {x: 3, y: 465344}, {x: 4, y: 957589}, {x: 5, y: 143266}, {x: 6, y: 757888}, {x: 7, y: 634546}, {x: 8, y: 367890}, {x: 9, y: 234553}, {x: 10, y: 134567}, {x: 11, y: 345345}, {x: 12, y: 898334} ],
        NP: [ {x: 1, y: 48}, {x: 2, y: 61}, {x: 3, y: 46}, {x: 4, y: 59}, {x: 5, y: 41}, {x: 6, y: 47}, {x: 7, y: 63}, {x: 8, y: 53}, {x: 9, y: 55}, {x: 10, y: 67}, {x: 11, y: 45}, {x: 12, y: 58} ],
        // NP: 

      }
    };
    this.changeMiniScreen = this.changeMiniScreen.bind(this);
  }
  changeMiniScreen(e){
    this.setState({ index: e.target.target });
    this.setState({ miniScreen: e.target.title });
  }
  
  render() {
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
          this.state.miniScreen === "Generate" ? <Generator/> : <ReportGraphs graphData={this.state.BarGraphInfo} /> 
          }
        </div>
      </div>
    )
  }
}


export default Reports; 