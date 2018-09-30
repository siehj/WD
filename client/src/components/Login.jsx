import React from 'react';

const Login = (props) => {
  return(
    <div className="container" >
      <div className="row" >
        <div className="col-md-4" ></div>
        <div className="col-md-4" >
          <form role="form">
          <div className="form-group" >
            <label htmlFor="username">Username</label>
            <input type="text" className="form-control" id="username" onChange={props.update} />
          </div>
          <div className="form-group" >
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" id="password" onChange={props.update} />
          </div>
          <div className="form-group" >
            <button type="button" className="btn btn-default" onClick={props.handleLogin} >Login</button>
          </div>
          </form>
        </div>
        <div className="col-md-4" ></div>
      </div>
    </div>
  )
} 

export default Login;