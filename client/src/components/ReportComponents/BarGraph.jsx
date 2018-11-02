import React, { Component } from 'react';
import '../../../../node_modules/react-vis/dist/style.css';
import  { XYPlot, VerticalBarSeries, XAxis, YAxis, Hint } from 'react-vis';

const BarGraph = (props) => {
 return (
   <div id="barGraph" >
    <XYPlot height={300} width={600} color="#28a745" >
      
      <XAxis bottom={0} hideLine title="months" />
      <YAxis left={0} hideLine  />
      <VerticalBarSeries data={props.YPData} onValueMouseOver={(datapoint, event) => {
        // console.log('hovering', datapoint);
        // console.log(event)
      }}/>
    </XYPlot>
   </div>
 )
}

export default BarGraph;