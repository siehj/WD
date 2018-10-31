import React from 'react';
import Router from './Router.jsx';
import Chat from './Chat.jsx';


class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currScreen: 'Home',
      // Sidebar options for admins
      adminSidebar: {
        'Home': [],
        'Reports': ['Generate', 'Evaluate', 'Graphs'],
        'Tasks': ['Assign', 'Board'],
        'Resources': ['Power Points', 'Employee Resources', 'Office Resources'],
        'Accounts': ['Audit', 'A/R', 'Billing'],
        'Contacts': [], //Create New, Search
      },
      // Sidebar options for Staff
      staffSidebar: {
        'Home': [],
        'Tasks': ['Board'],
        'Resources': ['Tutorials', 'Employee Resources', 'Office Resources'],
        'Contacts': [],
      },
    }
  }

  changeScreen(e) {
    this.setState({ currScreen : `${e.target.name}` });
  }

  render() {
    return (
      <div id="dashboard"  >
        <div className="wrapper" >
          <nav id="sidebar" >
            <div className="sidebar-header" >
              <h2>Wellness Dental</h2>
            </div>
            <ul className="list-unstyled components">
              {this.props.status === 'Admin' ?
                Object.keys(this.state.adminSidebar).map((option, i) => {
                  if(option !== this.state.currScreen){
                    return (
                      <li key={i} >
                      <a className="text-center" name={option} style={{ fontSize : '18px' }} onClick={this.changeScreen.bind(this)} >{option}</a>
                    </li>
                    )
                  }
                })
                :
                Object.keys(this.state.staffSidebar).map((option, i) => {
                  if(option !== this.state.currScreen){
                    return (
                      <li key={i} >
                      <a className="text-center" name={option} style={{ fontSize : '18px' }} onClick={this.changeScreen.bind(this)} >{option}</a>
                    </li>
                    )
                  }
                })
              }
            </ul>
            <Chat />
          </nav>
          {/* MAIN PAGE */}
          <div className="container" id="main" >
            <h2>{this.state.currScreen}</h2>
              <Router screen={this.state.currScreen} status={this.props.status} admin={this.state.adminSidebar} staff={this.state.staffSidebar} />
          </div>
        </div>


      </div>
    )
  }
}

export default Dashboard;


// Notes
//  {/* <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle text-center">Home</a>
//  <ul className="collapse list-unstyled" id="homeSubmenu">
//    <li>
//      <a href="" className="text-center"  >Home 1</a>
//    </li>
//    <li>
//      <a href="" className="text-center"  >Home 2</a>
//    </li>
//    <li>
//      <a href="" className="text-center"  >Home 3</a>
//    </li>
//  </ul> */}
//{/* </li> */}
//{/* <li>
//  <a href="" className="text-center"  >About</a>
//</li> */}
//{/* <li>
//  <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle text-center">Pages</a>
//  <ul className="collapse list-unstyled" id="pageSubmenu">
//    <li>
//      <a href="" className="text-center"  >Page 1</a>
//    </li>
//    <li>
//      <a href="" className="text-center"  >Page 2</a>
//    </li>
//    <li>
//      <a href="" className="text-center"  >Page 3</a>
//    </li>
//  </ul>
//</li> */}
// {/* <li>
//   <a href="" className="text-center"  >Portfolio</a>
// </li>
// <li>
//   <a href="" className="text-center"  >Contact</a>
// </li> */}