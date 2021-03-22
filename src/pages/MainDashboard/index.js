import { Card, Col, Row } from "antd";
import React, { useState, Fragment } from "react";
import { RadialChart, LineChart, DataTable } from "../../components";
import {
  RecentAddedSuppliers,
  FailedConnections,
  data1,
  data2,
  data3,
} from "../../utils/tableData";
import "./index.css";
function Index() {
  const [recentTable, setRecentTable] = useState("Customers");
  const [recentAlarm, setRecentAlarm] = useState("Type 01");
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

  const radialChart1Legends = [
    { text: "Total", color: "#29B9CB" },
    { text: "Active", color: "#84E99C" },
    { text: "In-Active", color: "#0CA5D5" },
  ];
  const radialChart2Legends = [
    { text: "Total", color: "#29B9CB" },
    { text: "Active", color: "#84E99C" },
    { text: "In-Active", color: "#0CA5D5" },
  ];
  const radialChart3Legends = [
    { text: "Total", color: "#29B9CB" },
    { text: "Retrieve - Scheduled/Manual", color: "#84E99C" },
    { text: "Import", color: "#0CA5D5" },
    { text: "Export - Full/Partial", color: "#B19FDF" },
  ];
  return (
    <Fragment>
      <div style={styles.row}>
        <Row>
          <Col xs={24} sm={8}>
            <Card style={styles.card} bordered={false}>
              <RadialChart
                legends={radialChart1Legends}
                data={[80, 45, 75]}
                chartHeading="CUSTOMERS"
              />
            </Card>
          </Col>
          <Col xs={24} sm={8}>
            <Card style={styles.card} bordered={false}>
              <RadialChart
                legends={radialChart2Legends}
                data={[78, 30, 55]}
                chartHeading="SUPPLIERS"
              />
            </Card>
          </Col>
          <Col xs={24} sm={8}>
            <Card style={styles.card} bordered={false}>
              <RadialChart
                legends={radialChart3Legends}
                data={[88, 65, 35, 55]}
                chartHeading="ACTIVE JOBS"
              />
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
                activeTab={recentTable}
                onChangeTab={setRecentTable}
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
      <div style={styles.row}>
        <Row>
          <Col xs={24}>
            <Card style={styles.card} bordered={false}>
              <h5 className="main-heading my-3">JOBS OVERVIEW ANALYTICS</h5>
            </Card>
          </Col>
        </Row>
      </div>
      <div style={styles.row}>
        <Row>
          <Col xs={12}>
            <Card style={styles.card} bordered={false}>
              <h5 className="main-heading mt-3">RUNNING JOBS</h5>
              <LineChart data={data1} height={235} />
            </Card>
          </Col>
          <Col xs={12}>
            <Card style={styles.card} bordered={false}>
              <h5 className="main-heading mt-3">JOBS</h5>
              <LineChart data={data2} height={235} />
            </Card>
          </Col>
        </Row>
      </div>
      <div style={styles.row}>
        <Row>
          <Col xs={24}>
            <Card style={styles.card} bordered={false}>
              <h5 className="main-heading my-3">ALARMS ANALYTICS</h5>
            </Card>
          </Col>
        </Row>
      </div>
      <div style={styles.row}>
        <Row>
          <Col xs={12}>
            <Card style={styles.card} bordered={false}>
              <DataTable
                heading="RECENT ALARMS"
                columns={columns1}
                tabs={["Type 01", "Type 02"]}
                activeTab={recentAlarm}
                onChangeTab={setRecentAlarm}
                tableData={RecentAddedSuppliers}
              />
            </Card>
          </Col>
          <Col xs={12}>
            <Card style={styles.card} bordered={false}>
              <h5 className="main-heading mt-3">ALARM ANALYTICS</h5>
              <LineChart data={data3} height={235} />
            </Card>
          </Col>
        </Row>
      </div>
    </Fragment>
  );
}

export default Index;
