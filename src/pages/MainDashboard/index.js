import { Card, Col, Row } from "antd";
import React from "react";
import { RadialChart } from "../../components";
import "./index.css";
function Index() {
  const styles = {
    row: {
      marginTop: "15px",
    },
  };
  return (
    <div style={styles.row}>
      <Row gutter={{}}>
        <Col xs={24} sm={8} className="">
          <Card bordered={false}>
            <RadialChart chartHeading="CUSTOMERS" />
          </Card>
        </Col>
        <Col xs={24} sm={8} className="">
          <Card bordered={false}>
            <RadialChart chartHeading="SUPPLIERS" />
          </Card>
        </Col>
        <Col xs={24} sm={8} className="">
          <Card bordered={false}>
            <RadialChart chartHeading="ACTIVE JOBS" />
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Index;
