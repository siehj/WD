import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class TaskDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false, clicked: "unassigned" };
    this.toggle = this.toggle.bind(this);
    this.changeSelected = this.changeSelected.bind(this);
  }

  toggle() {
    this.setState({ open: !this.state.open });
  }

  changeSelected(e) {
    let name = e.target.value;
    this.setState({ clicked: e.target.value}, () => this.props.update(name));

  }

  render() {
    return (
      <Dropdown isOpen={this.state.open} toggle={this.toggle} >
       <DropdownToggle direction="down" caret >
          {this.state.clicked}
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem name="assignedTo" value="unassigned" onClick={this.changeSelected} >Unassigned</DropdownItem>
          {this.props.employees.map((emp, i) => {
            return <DropdownItem name="assignedTo" value={emp} key={i} onClick={this.changeSelected} >{emp}</DropdownItem>
          })
          }
        </DropdownMenu>
      </Dropdown>
    )
  }
}

export default TaskDropdown;