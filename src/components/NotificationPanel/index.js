import { List, Button } from "antd";
import React from "react";
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
      size="large"
      dataSource={data}
      renderItem={(item) => (
        <div className="p-3 border-bottom">
          <h6 className="d-inline">{item.title}</h6>
          <br />
          <p className="d-inline">{item.text}</p>
          <div className="float-right ml-2">
            <Button size={"small"} style={styles[item.type]} type="primary">
              {item.type}
            </Button>
          </div>
        </div>
      )}
    />
  );
}

export default Index;
