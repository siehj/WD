import React from 'react';

const Reports = (props) => {
  return (
    <div>
      <ul className="nav nav-tabs">
        {
          props.report.map((rep, i) => {
          return i === 0 ? <li className="active" key={i}><a>{rep}</a></li> : <li key={i}><a>{rep}</a></li>
          })
        }
      </ul>
    </div>
  )
}

export default Reports; 