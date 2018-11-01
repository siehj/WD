import React from 'react';
import Generator from './NestedComponents/ReportGen.jsx';
import ReportInput from './NestedComponents/ReportInput.jsx';
import ReportGraphs from './NestedComponents/ReportGraph.jsx';

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
    return (
      <div >
        <ul className="nav nav-tabs">
          {
            this.props.report.map((rep, i) => { return <li key={rep} onClick={this.changeMiniScreen} ><a target={i} title={rep}>{rep}</a></li> })
          }
        </ul>

        {/* Displayed mini screen */}
        {this.state.miniScreen === "Input" ? <ReportInput/> : 
        this.state.miniScreen === "Generate" ? <Generator/> : <ReportGraphs/> 
      }
      </div>
    )
  }
}


export default Reports; 