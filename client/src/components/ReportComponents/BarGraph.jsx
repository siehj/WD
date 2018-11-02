import React, { Component } from 'react';
import '../../../../node_modules/react-vis/dist/style.css';
import  { XYPlot, VerticalBarSeries, XAxis, YAxis, Hint } from 'react-vis';

const BarGraph = (props) => {
  const data = [
    {x: 0, y: 8},
    {x: 1, y: 5},
    {x: 2, y: 4},
    {x: 3, y: 9},
    {x: 4, y: 1},
    {x: 5, y: 7},
    {x: 6, y: 6},
    {x: 7, y: 3},
    {x: 8, y: 2},
    {x: 9, y: 0}
  ];
 return (
   <div className="graph" >
    <XYPlot height={300} width={500} color="#28a745" >
      
      <XAxis bottom={0} hideLine />
      <YAxis left={0} hideLine />
      {/* <Hint value={datapoint} >
          <div style={{background: 'black'}}>
            <h3>Value of hint</h3>
            <p>{datapoint.y}</p>
          </div>
        </Hint> */}
      <VerticalBarSeries data={data} onValueMouseOver={(datapoint, event) => {
        console.log('hovering', datapoint);
        console.log(event)
      }}/>
    </XYPlot>
   </div>
 )
}

export default BarGraph;