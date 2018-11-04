import React from 'react';
import ReactDOM from 'react-dom';
import Login from './components/Login.jsx';
import Dashboard from './components/Dashboard.jsx';
const axios = require('axios');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: true,
      username: '',
      password: '',
      empStatus: 'Admin', // Admin or Staff
      error: ''
    }
  }

  handleLogin() { 
    axios.post('/login', { username: this.state.username, password: this.state.password })
      .then(({ data }) => {
        data.admin_status ? this.setState({ empStatus: "Admin" }) : null 
        this.setState({ loggedIn: true });
      })
      .catch(() => { this.setState({ error: 'Username or Password are not correct' })});
  }

  updateUserInfo(e) {
    this.setState({ [e.target.id] : e.target.value });
  }

  render() {
    return (
      <div>
        {this.state.loggedIn ? 
        <Dashboard status={this.state.empStatus} /> 
        :
          <div>
            <div id="logo" >
              <h1>Wellness Dental</h1>
            </div>
            <Login update={this.updateUserInfo.bind(this)} handleLogin={this.handleLogin.bind(this)} />
          </div>
        }
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));