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
              {/* <img width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" /> */}
              <BarGraph/>
              <CardSubtitle className="text-center"> <em> Yearly Production</em></CardSubtitle>
            </CardBody>
          </Card>
        </Col>
      </Row>

    </div>
  )
}

export default ReportGraphs;