import { Col, Row } from "antd";
import React from "react";

function Index() {
  return (
    <div>
      <Row gutter={{}}>
        <Col xs={24} sm={24} md={8} className="gutter-row">
          asdsdddsad
          <div>{/* <RadialBarChart chartHeading={"CUSTOMERS"} /> */}</div>
        </Col>
        <Col xs={24} sm={24} md={8} className="gutter-row">
          asdsdddsad
          <div>{/* <RadialBarChart chartHeading={"SUPPLIERS"} /> */}</div>
        </Col>
        <Col xs={24} sm={24} md={8} className="gutter-row">
          asdsdddsad
          <div>{/* <JobsRadialChart /> */}</div>
        </Col>
      </Row>
    </div>
  );
}

export default Index;
