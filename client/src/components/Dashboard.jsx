import React from 'react';
import Router from './Router.jsx';
import Chat from './Chat.jsx';
import TaskModal from './TaskComponents/TaskModal.jsx';
import { Button, Container, Row, Col, Badge } from 'reactstrap';


class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currScreen: 'Home',
      // Sidebar options for admins
      adminSidebar: {
        'Home': [],
        'Reports': ['Graphs', 'Input', 'Generate',],
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
      navOpen: true,
      displayTaskModel: false,
      newMessages: []
    }
    this.toggleModal = this.toggleModal.bind(this);
  }

  changeScreen(e) {
    this.setState({ currScreen: `${e.target.name}` });
  }

  openNav() {
    document.getElementById("sidebar").style.width = '32%';
    // document.getElementById("main").style.marginLeft = '30%';    
    this.setState({ navOpen: true });
  }

  closeNav() {
    document.getElementById("sidebar").style.width = '0px';
    document.getElementById("main").style.marginLeft = '0px';
    this.setState({ navOpen: false });
  }

  toggleModal(e) {
    e.target.title === "task" ? this.setState({ displayTaskModel : !this.state.displayTaskModel }) : null;
  }

  render() {
    return (
      <div id="dashboard"  >
        <div className="wrapper" >
          <nav id="sidebar" >
          {this.state.navOpen ?
          <div>
            <div className="sidebar-header text-center" >
              <h2>Wellness Dental</h2>
            </div>
                    {/* REFACTOR LIST FOR NAV */}
            <ul className="list-unstyled components">
              {this.props.status === 'Admin' ?
                Object.keys(this.state.adminSidebar).map((option, i) => {
                  if (option !== this.state.currScreen) {
                    return (
                      <li key={i} >
                        <a className="text-center" name={option} style={{ fontSize: '18px' }} onClick={this.changeScreen.bind(this)} >{option}</a>
                      </li>
                    )
                  }
                })
                :
                Object.keys(this.state.staffSidebar).map((option, i) => {
                  if (option !== this.state.currScreen) {
                    return (
                      <li key={i} >
                        <a className="text-center" name={option} style={{ fontSize: '18px' }} onClick={this.changeScreen.bind(this)} >{option}</a>
                      </li>
                    )
                  }
                })
              }
            </ul>
            
            <Container>
              <Row>
                <Col className="navIcons text-center">
                  <a>
                    {this.state.newMessages.length ? <Badge color="success" style={{ marginBottom: '10px' }} >{this.state.newMessages.length}</Badge> : null }
                  {/* chat bubble */}
                    <img className="icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAN4SURBVGhD7ZpNSBRhHMZXLa2QwAq69Q0dokOJdKwkJREvUociIQIjhA4GQUZQUEHYKVKhQx9IhZRI1CUKCuoiiBGdiki0DwMp+hSLSvu9+z7uMM2uM2u7s7OwP3h4Z97/1zPr7uqsGytQoED2mZycLJuamtrC2oZuokE0hn6xH4fj72gEPUQX0D60Vi1yB96KMVKPetBXazd9qH2OTqOVah0OzC5laAsaslYyA/3+oDtoo0ZlD4bUoZeanRXob7iGlmps5qB/OY0v21HhwLwPaIcs/D80W42eqX+oMNdwlsMS2ZkdNFmH3tu2uQMP11nmyFZ6ULwGjdlWuQcvV1mKZC8YFFRQmNUX9WzA0ylZDAYFPaqNFPgybJXNmSF/py2LJlzICMsC2U0OSWXolS2JLng8JsvJIaFZuZEGn59YymXbCwlPbWr0wesB2XZDYL1y8gL8PpZ1N8SO2JT8gAv5jRbJvgObfcrJG/BcI/sObL5QPBDkj6IvOk0JOW/RN52mhJzXaFyngSC/VfYd2P9sw/7Q4KipYZ2PbmnbA7Fm5S1ED7Ttgn1Do8njdAnHgzbiD7ntps6FYr5QbB61YpUZk1U24ob9YaXE4bxOIRfsP1FKHM6bFPKF3C6VObD5Q/EZIc+8yBI3PRw3KuSCfXP7m3iv53h/PPAP5L1jKVWa6ddmI/6Qe15lDmwG/nOd3H5k7habkDGSFGL3US1qRh+17YFYH6pBB5Hv62kack/KvgOb/YrnE3tl34EL6VQwn6iUfQcuZLeCeQF+zVPVewtMwLxFTti06IPXbln3QvyGTYs+XMhm2fZCvNKmRRsuwvW7Jykk3VZ+lNkmu6khaRkXE/i9PGzw1iur/pAcyTtFfJk/VBfLZjAo6FJ9JMDPONoke8GhtoTCXtsmt+DjJ2qQtfShRwm6Eu+WI7iACVQvS7OHXkU0OmQeFds6PJg5hDbISmagYa36hwLzLrFUaHzmoPF2OyK7MGcAVWts5qH5Oc3KOPQ23EMNnKb3iXs60HweQ0bjUzME/cyL+BE6zOkqjcouDPP9BUnOXZYVrNWoheMzrJ2oG11EHeg42oPMff5ctQ8HBpr/H75hTQoxQweHifvuSILJdmvZC7Fh5P2QLGpgsgolvr0wDXsDLOZTkWj/FKbBcCsyX7cwT50TrLvQcoULFEhJLPYX9MB1kryBNa4AAAAASUVORK5CYII=" />
                  </a>
                  {/* info icon */}
                  <a><img className="icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAORSURBVGhD7ZrNS1RRGMZNK8xNggWtqk0t+tj0sYnINhW5CBd9GQS1Ecmg/AOSCPqAslZGupCijauoICNrEW6LglwkhEhlFlQWCWqUM/3OPQ/drqM2c8+5dzL8wcO5c973PO97ZuY6d+5YMsf/SiaTWYGOovZsNvuYcQh94zjL+BMNoz50G51DOwlVaHlxoZkq1ISemYYLhXWjqBPt5uE82aYHRZdQvAWNBB15AK9edIDD5DdkilCsAQ0H1RMA7x60ViX9g/lS9ED1EoU6Y+i4SvvDPEPoreqkBjVvMCxQG25gthl9ttbpQ+17DOVqJx6YrEeJnQ/5Qg93GMrUVmGw2JwTzm8nPMz7PaOHscHiilrLH9aZv073rUU8WP8G7eCwDC3m+EwQiAnrzZNRqxbzgzUNdnl88Ngiu98wfd1G44HnJ1Qlu5kh0bylnM4L1g/JLgLze5QSGzzaZTczJLZojQtfUc4nNN51NhwfPCbQallODQnm2snLZQc+h2UbwFQpcz026gY+HbKdGhKalOsMXuMMpxk3oV3okY24I+9KtZ0LCc9t6qygXm1HIbDSxmcHPOldaj0KsSM2ZXbARsy5nHsdRqDNpriBzyjD08livo/RK3huUPshTPr6i/JClhEIbbUZ/qBWnexDmBxU3Al8XjFsZFwj6wDmkthIs+xDmAxuFPgCv8grw1QSG7kk+xDFvJHSRq7KPoTJH4p7IaWNtMo+hMkvinshpY2cl30Iky8V90JKGzkh+xAmzddJb6S0kRrZhzB5VnEvpLERWC77EAqbe7HeSHoj+PfLOgqxCoJjNs2dFDZyTda5EOxUnjMpbKRa1rkQrFGeM0luBO8BhlJZ50LQ3AbqDbIdSXgjjbKdHpIOKj8WrB9BD1HkbgeP12n+iVJjwfpBtEi200OueVViX9KzNvJKTIYUp1cG/0Oy+jskm7vv5gt+wbDuNcO+6UT8FGMsWNutFvOHRce0/p+Afj4wLFN7hcHim9amuNDHd4btaqtwWLwQk7uBW5GgvvlFeL9aig9e5RjdsrbpQt1xtFetuINnGYaXkfPvHPlCqfdom1rwC/61mH+0pZKDGt0M8U7sfKGIudHdjiZsWX/g+Q7l/znhAwquQh0o1ufNn+AxgBo5dPvR0wWKV6J6GulCef8kQW4/akPVPJz+ArAY0NB8ZG7O1aFmdFHNtjJ/gfEkMv93kvvNbo7/ipKSXx1HK0yKqpBEAAAAAElFTkSuQmCC"/></a>
                  {/* <a>3</a> */}
                </Col>
              </Row>
              <Row >
                <Col><Button className="logoutBtn" outline color="success" size="block lg" >Logout</Button></Col>
              </Row>
            </Container>
            </div>
            : null
          }
          </nav>
          {/* MAIN PAGE */}
          <div className="container" id="main" >
          {this.state.displayTaskModel === true ? <TaskModal status={this.state.displayTaskModel} toggleTaskModal={this.toggleModal} /> : null }
          <Container>
            <Row>
              <Col  xs="2" sm="2" md="2" lg="2" xl="2" style={{ padding: '0px' }} >
                {this.state.navOpen === false ? 
                <span onClick={this.openNav.bind(this)} > <img className="navControllIcon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACGSURBVGhD7dYxDYAwFEXRikABE3PbkREBiCBoQAIKEIEWPMELKRbg/3JPcru/pW0AAHwixrh6L6U0Bh2n9zRmY4il6hqiY/aexvTl7gIA4Of0Ku7e0+s+8Wm0FEOsdQ/JOQ/e05iu3F0AAPycXsWjghY+jZZiiLWeb3zrPY1pyt0FAHhTCBeErfUENOiYMQAAAABJRU5ErkJggg=="/> </span> : 
                <span onClick={this.closeNav.bind(this)}> <img className="navControllIcon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAHpSURBVGhD7ZjJSsNQFIarblVwngW3hc4jXTjhxnljH8K1L6CIiIiIVsHncVg5gVgnFJ/ChSv9b/1vuUa0tU2bBM4HhyTn3N57vqYkaXyCIAiCIAiCK2nk1k5qMefvxGKxJcR5OBzuYqpqIpHIKObMJ5PJEaZqSzabbVISiI9oNHpjh4ySwFxvak7EKtO1B4t1YuFrO2Ti8fiYIXGIVMNXpU5YZG6DwWA3S2WDz447KqFJJBIdaOSKjeRTqVQPSyWxSBwg5YyEphIZjJ/QEtjmkHJWQpNOp9sNmTvI9bL0A4ybNCT2kXKHhIYyl2zwHtHHUhHkTIk9pNwlobHIPCCKMrg6TXlCQhMIBNpMGdwj+k0JxC6GuVtCo2TQ8AUbf/WkhIYyeQqos3PEkrfAz2kaAu+GyGMoFBpg2Rug8RktAYEc4oxCT56RQdOzhsSOyuGJttWUwfFgYbBbMSUQ20wXoMyp62XQ5JyWwP4W098wZbB9dp0M7hXzpSQ0mUymxZTBRWGIJWexSGwy/Seuk0EDC1oCscF0WVDmhDIvjsmggcVKJTRWGWyHWaoPWLAogQbWma4Iv9/f7IiMevmABfV/jzWmq0LJYK5jylT1xfwL9bIBCy7z0BZ4Zlaw662HSkEQBEEQBMEr+Hyfz8vvJ/A+0M4AAAAASUVORK5CYII="/> </span>}
              </Col>
              <Col className="text-right" xs="10" sm="10" md="10" lg="10" xl="10" >
                <h2>{this.state.currScreen}</h2>
              </Col>
            </Row>  
          </Container>
            <Router screen={this.state.currScreen} toggleTaskModal={this.toggleModal} status={this.props.status} admin={this.state.adminSidebar} staff={this.state.staffSidebar} />
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