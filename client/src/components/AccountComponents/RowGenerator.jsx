import React from 'react';
import AcctRow from './AcctRow.jsx';

const RowGenerator = (props) => {
 const rows = [];
 for(let i = 0; i < props.num; i++) {
   rows.push(<AcctRow key={i} name={`row${i}`} sec={props.sec} off={props.off} />)
 }

 return (
  <tbody>
    {rows}
  </tbody>
 )
}

export default RowGenerator;
