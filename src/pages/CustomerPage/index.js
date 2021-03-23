import { Card, Col, Row } from "antd";
import React, { useState, Fragment } from "react";
import { RadialChart, LineChart, DataTable } from "../../components";
import {
  RecentAddedSuppliers,
  RecentAddedCustomers,
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
      borderRadius: 12,
      boxShadow: "0px 3px 6px #00000014",
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
    { text: "Retrieve", color: "#84E99C" },
    { text: "Import", color: "#0CA5D5" },
    { text: "Export", color: "#B19FDF" },
  ];
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
    </Fragment>
  );
}

export default Index;
