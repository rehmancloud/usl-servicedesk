import { Card, Col, Row } from "antd";
import React, { useState, Fragment } from "react";
import { RadialChart, LineChart, DataTable } from "../../components";
import { data5, data4, data6, data7 } from "../../utils/tableData";
import "./index.css";
function Index() {
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
  const columns1 = ["Time", "Action", "Status"];
  const columns2 = ["Time", "Supplier", "Customer"];

  return (
    <Fragment>
      <div style={styles.row}>
        <Row>
          <Col xs={24}>
            <Card style={styles.card} bordered={false}>
              <h5 className="main-heading my-3">CUSTOMER DASHBOARD</h5>
            </Card>
          </Col>
        </Row>
      </div>
      <div style={styles.row}>
        <Row>
          <Col xs={24} sm={24} md={24} lg={12}>
            <Card style={styles.card} bordered={false}>
              <h5 className="main-heading my-3">JOB HISTORY</h5>
              <LineChart
                colors={["#F65F9C", "#554B86"]}
                data={data6}
                height={235}
              />
              {/* <div onClick={() => {}}> */}
              <DataTable tableData={data4} columns={columns1} />
              {/* </div> */}
            </Card>
          </Col>
          <Col xs={24} sm={24} md={24} lg={12}>
            <Card style={styles.card} bordered={false}>
              <h5 className="main-heading my-3">SCHEDULE HISTORY</h5>
              <LineChart
                colors={["#5B8FF9", "#5AD8A6", "#5D7092", "#F6BD16", "#E8684A"]}
                data={data7}
                height={235}
              />
              <DataTable tableData={data5} columns={columns1} />
            </Card>
          </Col>
        </Row>
      </div>
    </Fragment>
  );
}

export default Index;
