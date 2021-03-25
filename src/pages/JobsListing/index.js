import { Card, Col, Row } from "antd";
import React, { useState, Fragment } from "react";
import { DataTable } from "../../components";
import { jobListing } from "../../utils/tableData";
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

  const tableHeader = [
    "Customer Name",
    "Status",
    "Start Time",
    "End Start",
    "Job Type",
    "Job Trigger",
  ];

  return (
    <Fragment>
      <div style={styles.row}>
        <Row>
          <Col xs={24}>
            <Card style={styles.card} bordered={false}>
              <DataTable
                heading="JOBS LISTING"
                columns={tableHeader}
                pagination={true}
                tableData={jobListing}
              />
            </Card>
          </Col>
        </Row>
      </div>
    </Fragment>
  );
}

export default Index;
