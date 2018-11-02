import React from 'react';
import { Row, Col, Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle } from 'reactstrap';
import BarGraph from './BarGraph.jsx';

const ReportGraphs = (props) => {
  return (
    <div>
      <h5 className="text-center">{new Date().getFullYear()}</h5>
      <Row>
        <Col>
          <Card>
            <CardBody>
              <BarGraph YPData={props.graphData.YP} />
              <CardSubtitle className="text-center"> <em> Yearly Production</em></CardSubtitle>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card>
            <CardBody>
              
              <CardSubtitle className="text-center" ><em>New patients ({new Date().getMonth()-1}/{new Date().getFullYear()})</em></CardSubtitle>
            </CardBody>
          </Card>
        </Col>
        <Col>2</Col>
      </Row>
    </div>
  )
}

export default ReportGraphs;