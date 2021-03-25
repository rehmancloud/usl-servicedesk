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
      title: "Customer",
      text: "Racing car sprays burning fuel crowd.",
      type: "warning",
      new: true,
    },
    {
      title: "Supplier",
      text: "Japanese princess to wed commoner",
      type: "error",
    },
    {
      title: "Customer",
      text: "Australian walks 100km after outback",
      type: "progress",
    },
    {
      title: "Supplier",
      text: "Racing car sprays burning fuel crowd.",
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
              <p className="m-0">{item.text}</p>
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
