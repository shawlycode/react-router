import React from "react";
import { Container,Row,Col } from "react-bootstrap";
import {Link} from 'react-router-dom';

function ServiceDetail() {
  return (
    <Container>
      <Row>
        <Col>
        <Link to ="/service/webdev/service_details">WebDev</Link>
        </Col>
        <Col>
        <Link to ="/service/uidesigner/service_details">UI Designer</Link>
        </Col>
        <Col>
        <Link to ="/service/ecommerce/service_details">E-Commerce</Link>
        </Col>
      </Row>
    </Container>
  );
}

export default ServiceDetail;
