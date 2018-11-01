import React from 'react';

const Generator = (props) => {
  return (
    <div>
      <form>
        <div className="input-group" >
          Search: <input type="text" name="ReportQuery" id="ReportQuery"/>
          <button type="button" id="QueryBtn" >Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Generator;