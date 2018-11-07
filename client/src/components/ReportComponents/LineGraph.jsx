import React, { Component } from 'react';
import '../../../../node_modules/react-vis/dist/style.css';
import  { XYPlot, LineSeries, XAxis, YAxis, Hint } from 'react-vis';

const LineGraph = (props) => {
  
  return (
    <div  >
      <XYPlot height={300} width={360} stroke="#4c4d4c" >
        <XAxis bottom={0} hideLine title="months" />
        <YAxis left={0} />
        <LineSeries data={props.NPData} />
      </XYPlot>
    </div>
  );
}

export default LineGraph;