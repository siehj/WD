import React from 'react';
import { Button, Container, Row, Col } from 'reactstrap';


class Tasks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],

    };
  }

  componentDidMount() {
    // console.log(this.props.status === 'Admin');
  }


  render() {
    return (
      <div>
      <Container>
        <Row>
          <Col className="text-right">
            <Button size="sm" color="success" title="task" onClick={this.props.toggleTaskModal} >CREATE NEW TASK +</Button>
          </Col>
        </Row>
      </Container>
      </div>
    )
  }
}

export default Tasks; 