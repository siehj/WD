import React from 'react';
import ReactDOM from 'react-dom';
import Login from './components/Login.jsx';
import Dashboard from './components/Dashboard.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      username: '',
      password: '',
      empStatus: 'Admin' // Admin or Staff
    }
  }

  handleLogin() {
    // e.preventDefault();
    
    $.ajax({
      url: '/login',
      method: 'POST',
      data: {
        username: this.state.username,
        password: this.state.password
      },
      success: () => {
        // console.log('yes');
        this.setState({ loggedIn: true });
      }, 
      error: (err) => {
        console.log(err);
      }
    });
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