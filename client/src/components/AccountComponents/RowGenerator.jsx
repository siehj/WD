import React from 'react';
import AcctRow from './AcctRow.jsx';

const RowGenerator = (props) => {
 const rows = [];
 const rowTots = {};

 for(let i = 0; i < props.num; i++) {
   rows.push(<AcctRow key={i} name={i} sec={props.sec} off={props.off} updateTable={props.updateTable} />)
 }

 return (
  <tbody>
    {rows}
  </tbody>
 )
}

export default RowGenerator;
