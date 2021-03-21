import { Card, Col, Row } from "antd";
import React, { Fragment } from "react";
import { RadialChart, DataTable } from "../../components";
import { RecentAddedSuppliers, FailedConnections } from "../../utils/tableData";
import "./index.css";
function Index() {
  const styles = {
    row: {
      marginTop: "8px",
    },
    card: {
      borderRadius: 15,
      boxShadow: "5px 8px 24px 5px #e4e8f7",
      margin: "8px 8px 0px 8px",
    },
  };
  const columns1 = ["Time", "ID", "Name", "Schedule"];
  const columns2 = ["Time", "Supplier", "Customer"];
  return (
    <Fragment>
      <div style={styles.row}>
        <Row>
          <Col xs={24} sm={8}>
            <Card style={styles.card} bordered={false}>
              <RadialChart chartHeading="CUSTOMERS" />
            </Card>
          </Col>
          <Col xs={24} sm={8}>
            <Card style={styles.card} bordered={false}>
              <RadialChart chartHeading="SUPPLIERS" />
            </Card>
          </Col>
          <Col xs={24} sm={8}>
            <Card style={styles.card} bordered={false}>
              <RadialChart chartHeading="ACTIVE JOBS" />
            </Card>
          </Col>
        </Row>
      </div>
      <div style={styles.row}>
        <Row>
          <Col xs={24} sm={12}>
            <Card style={styles.card} bordered={false}>
              <DataTable
                heading="RECENT ADDED"
                subheading="Last 7d"
                columns={columns1}
                tabs={["Customers", "Suppliers"]}
                tableData={RecentAddedSuppliers}
              />
            </Card>
          </Col>
          <Col xs={24} sm={12}>
            <Card style={styles.card} bordered={false}>
              <DataTable
                heading="FAILED CONNECTIONS"
                subheading="Last 24hr"
                columns={columns2}
                tableData={FailedConnections}
              />
            </Card>
          </Col>
        </Row>
      </div>
    </Fragment>
  );
}

export default Index;
