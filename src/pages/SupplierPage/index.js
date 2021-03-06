import { Card, Col, Row } from "antd";
import React, { useState, Fragment } from "react";

import "./index.css";
function Index() {
  const [recentTable, setRecentTable] = useState("Customers");
  const [recentAlarm, setRecentAlarm] = useState("Type 01");
  const styles = {
    row: {
      marginTop: "8px",
    },
    card: {
      borderRadius: 12,
      boxShadow: "0px 3px 6px #00000014",
      margin: "8px 8px 0px 8px",
    },
  };

  return (
    <Fragment>
      <div style={styles.row}>
        <Row>
          <Col xs={24}>
            <Card style={styles.card} bordered={false}>
              <h5 className="main-heading my-3">SUPPLIER DASHBOARD</h5>
            </Card>
          </Col>
        </Row>
      </div>
    </Fragment>
  );
}

export default Index;
