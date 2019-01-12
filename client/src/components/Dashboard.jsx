import React from 'react';
import Router from './Router.jsx';
import DraggableCalc from './AdditionalComponents/DraggableCalc.jsx';
import TaskModal from './TaskComponents/TaskModal.jsx';
import ContactModal from './ContactComponents/ContactModal.jsx';
import SideNav from './SideNav.jsx';
import { Button, Container, Row, Col, Badge } from 'reactstrap';
const axios = require('axios');


class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currScreen: 'Home',
      // Sidebar options for admins
      adminSidebar: {
        'Home': [],
        'Reports': ['Graphs', 'Input', 'Generate'],
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
      displayTaskModal: false,
      displayContactModal: false,
      displayCalc: false,
      newMessages: [],
      employees: []
    }
    this.toggleModal = this.toggleModal.bind(this);
    this.changeScreen = this.changeScreen.bind(this)
    this.submitCloseModal = this.submitCloseModal.bind(this);
    this.openCalc = this.openCalc.bind(this);
  }

  componentDidMount() {
    if(this.props.status === 'Admin') {
      axios.get('/api/getEmployees')
        .then(({ data }) => this.setState({ employees: data }));
    }
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
    e.target.title === "task" ? this.setState({ displayTaskModal : !this.state.displayTaskModal }) : 
    e.target.title === "contact" ? this.setState({ displayContactModal : !this.state.displayContactModal }) : null;
  }

  submitCloseModal(value) {
    if(value === 'task') {
      this.setState({ displayTaskModal : false });
    } else if (value === 'contact') {
      this.setState({ displayContactModal : false });
    }
  }

  openCalc() {
    this.setState({ displayCalc : !this.state.displayCalc });
  }

  render() {
    return (
      <div id="dashboard"  >
        {this.state.displayCalc === true ? <DraggableCalc/> : null }
        <div className="wrapper" >
          <SideNav adminSidebar={this.state.adminSidebar} navOpen={this.state.navOpen} newMessages={this.state.newMessages} status={this.props.status}
            staffSidebar={this.state.staffSidebar} changeScreen={this.changeScreen} openCalc={this.openCalc} />
          {/* MAIN PAGE */}
          <div className="container" id="main" >
          {this.state.displayTaskModal === true ? <TaskModal status={this.state.displayTaskModal} toggleTaskModal={this.toggleModal} submit={this.submitCloseModal} employees={this.state.employees} /> : null }
          {this.state.displayContactModal === true ? <ContactModal status={this.state.displayContactModal} toggleContactModal={this.toggleModal} submit={this.submitCloseModal} /> : null }
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
            <Router screen={this.state.currScreen} toggleModal={this.toggleModal} status={this.props.status} admin={this.state.adminSidebar} staff={this.state.staffSidebar} />
          </div>
        </div>

      </div>
    )
  }
}

export default Dashboard;

