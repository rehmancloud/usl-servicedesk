import { List, Button, Row, Col } from "antd";
import React from "react";
import moment from "moment";
import "./index.css";
function Index() {
  const styles = {
    warning: { backgroundColor: "#FFC107", borderColor: "#FFC107" },
    error: { backgroundColor: "#E34850", borderColor: "#E34850" },
    progress: { backgroundColor: "#0CA5D5", borderColor: "#0CA5D5" },
    ok: { backgroundColor: "#55CA91", borderColor: "#55CA91" },
  };
  const data = [
    {
      title: "Customer 01",
      text: "Retrive Failed Server error",
      type: "warning",
      new: true,
    },
    {
      title: "Supplier",
      text: "Invalid supplier config",
      type: "error",
    },
    {
      title: "Customer",
      text: "Import in progress",
      type: "progress",
    },
    {
      title: "Customer 02",
      text: "Retrive sucessfull",
      type: "ok",
    },
  ];
  return (
    <List
      className="bg-white mt-2 mr-3 list-panel"
      dataSource={data}
      renderItem={(item) => (
        <div
          className={
            item.new
              ? `p-3 border-bottom`
              : `p-3 border-bottom old-notification`
          }
        >
          <Row>
            <Col xs={12} sm={12}>
              <h6 className="m-0">{item.title}</h6>
            </Col>
            <Col xs={12} sm={12}>
              <small className="float-right mr-1">
                {moment().format("hh:mm A")}
              </small>
            </Col>
          </Row>
          <Row>
            <Col xs={16} sm={16}>
              <p className="m-0 mr-1">{item.text}</p>
            </Col>
            <Col xs={8} sm={8}>
              <small className="float-right">
                <Button size={"small"} style={styles[item.type]} type="primary">
                  {item.type}
                </Button>
              </small>
            </Col>
          </Row>
        </div>
      )}
    />
  );
}

export default Index;
