import React from 'react';
import Router from './Router.jsx';
import Chat from './Chat.jsx';
import { Button, Container, Row, Col } from 'reactstrap';


class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currScreen: 'Home',
      // Sidebar options for admins
      adminSidebar: {
        'Home': [],
        'Reports': ['Graphs', 'Audit', 'Generate',  ],
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
      navOpen: true
    }

  }

  changeScreen(e) {
    this.setState({ currScreen : `${e.target.name}` });
  }

  openNav() {
    document.getElementById("sidebar").style.width = '35%';
    // document.getElementById("main").style.marginLeft = '30%';    
    this.setState({ navOpen: true });
  }

  closeNav() {
    document.getElementById("sidebar").style.width = '0px';
    document.getElementById("main").style.marginLeft = '0px';    
    this.setState({ navOpen: false });
  }

  render() {
    return (
      <div id="dashboard"  >
        <div className="wrapper" >
          <nav id="sidebar" >
            <div className="sidebar-header text-center" >
            {/* <a onClick={this.closeNav.bind(this)} >X</a> */}
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
            {/* <Chat /> */}
            <Container>
          <Row>
            <Col className="navIcons text-center">
            <a className="icon" ><img className="icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAT8SURBVGhD7ZlriBVlHMZXVw2vmaKRRYKJ+WUpS9oPBYaGdgFZjfLyQSwqCk3JRaKCsP2gUkJmYGoRJYqoXRDE0gjzkxLdyCT8IN7vZbmVrWZ7/D3jc/Y4zc6ec3Znzg60P3h4Z573P//3/845Z2bOO1VddNFF+uRyue7Nzc13oGfRGvQF2o9OoXPWYfQ9+oT4pbRT0I1O0blQyL1oFTpJcSHw/kGawDF0Bp13Vwt4Yg9aiCo7KcbX2Z+JfrhaTlDQ32grehlNQMOxq31IC/h9UQ2agZajvVczBDkuonXodoenB+Pdx0DXTmAnUlF9HVI2HDsSNaATzqlPchWbAx2SHCS+Dq1A/3qwz9Fd7k4E0vYip35jxz3GcfSQuzsOyYahPU6u7/tkd6UCw/RjjOCkWa/idXN3+yDJbeigJ6FPYbC7UoexJqFfPPZqmu7uKg8OvgUddaJ3aCI/3rRhzBGMnT+RK22XDsfp4/3RCd6i6dhH2wEYXyc0P5mFtkuDA97zgVtoKv5J/BfqqKGO32l1Rau13TYEPuhJHKJJ/hLYTqhnhuvaT9PTdusQUE3gTz5gou3MQE2furb5tlqHgMcd+JmtTEFdunleQrp59rIdhc6vNBG431bmYBIbVCDtTFth6NCNT+yzlUmob5wnstVWGDqecsASW5mEEvU7PosuoN62C2DmL7kTbGUWatzsWu+xVQBztzuH2GoT4m5CA7wbCzE3k7afd2Mh5lbUx7ttQk49f6nWJ2wVwDyImrzbJsQtdqILNHW2I9C/xnHn0XjbIejuRp/+NSpOz1Z3uysWYmY7/iVbBTB/RWe8GwvH9yEueJwXbH/trhD4+nPVAvutXtLxxzgkgP217oqFsDrHRn/PmCdQo3dj4Xj92E4rkWD7Y3eFwO+P/nCY4la7KwS+rpYXHaa4xe6KhZj8/a7BVgHMfUGmXK6HrViIrUXb0Fo0zHYEcj1A/w6kBYlBtiPQp4UIxa3gmKK/J+KeU6G09bYKYG5zZ/r/mTsINS53rVNsFcBscOcsW5mFGne51pG2CmDmn3qL/tg6E+obhPS8ddhWGObQk07dMRtRu1dF0oY6n/EJf9tWFHU6aI6tTEFpuucEy1G0Y2xHoXM40kKZlmKizzGdDDVN8yR22oqHoPyn8oatTEA9A5DWj0Xxv7vM4XoCdYDWlMbZ7nSo5UOf4PdtFYd43cguIy0+Ry9xFYYaFngSB1B/26XBAfm75wGaEbYrDmPPpobLtFpFqbFdHhy8CGkyes8x1nbFYMx6JP5CrT49lwwJ9O5C6NXBfOaV+mIdYwxkrI0+iXrwTGYNgUR1JPzNidfbThzS6z4xDQUvjmh/phnt7mQg4Z1OvttWYpC2Guk/xjceQ1dMrcgn/4RB0vEe5F1bIegq+vh/LcTrzVctrd4nHlFuwfaX8h2WPCRf5oGetNUCnp4IjiAtZ26ifQVpVeYx2onoYW/PQ28ivSxtVD7BttZ0P0Lp3rcYS/8KT6Imtm+wHYCnF6KnXNAltaVArB5Qt6Cn0VCnSxcGetTjf2BLk9OVZRkKiqfV64ceaDTS2X+BdhGtXnq+jl5Dz6NHUOVvsiqOgfci3elHoaHoRXSWPk2gCc11eHahyHoXrFWWb5HusgFsf4cqfqMsG4rUJ/Cn6w7QRNB2NJXd9r3XqzQUO51ilyJ91+civaAs76Gti/8lVVVXACYnu90t0RkcAAAAAElFTkSuQmCC"/></a>
            {/* <a>2</a> */}
            {/* <a>3</a> */}
            </Col>
          </Row>
          <Row >
            <Col><Button className="logoutBtn" outline color="success" size="block lg" >Logout</Button></Col>
          </Row>
        </Container>
          </nav>
          {/* MAIN PAGE */}
          <div className="container" id="main" >
          {this.state.navOpen === false ? <span onClick={this.openNav.bind(this)} > > </span> : <span onClick={this.closeNav.bind(this)}> X </span> }
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