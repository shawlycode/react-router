import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function ServiceDetail() {
  return (
    <Container>
      <Row>
        <Col>
          <Link to="/service/webdev/service_details">WebDev</Link>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam,
            iure at veritatis vitae praesentium dicta, alias quia saepe libero
            placeat amet blanditiis iste consequatur quaerat? Facilis vitae
            perferendis eius id!
          </p>
        </Col>
        <Col>
          <Link to="/service/uidesigner/service_details">UI Designer</Link>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam,
            iure at veritatis vitae praesentium dicta, alias quia saepe libero
            placeat amet blanditiis iste consequatur quaerat? Facilis vitae
            perferendis eius id!
          </p>
        </Col>
        <Col>
          <Link to="/service/ecommerce/service_details">E-Commerce</Link>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam,
            iure at veritatis vitae praesentium dicta, alias quia saepe libero
            placeat amet blanditiis iste consequatur quaerat? Facilis vitae
            perferendis eius id!
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default ServiceDetail;
