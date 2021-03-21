import { Radio, Table, Tooltip, Row, Col } from "antd";
import React, { Fragment, useState, useEffect } from "react";
import "./index.css";
function DataTable({
  heading = "",
  subheading = "",
  tabs = [],
  tableData = [],
  onChangeTab,
  columns = [],
  activeTab = "",
}) {
  const [tableHeader, setTableHeader] = useState([]);
  const [TABS, SETTABS] = useState([]);

  useEffect(() => {
    let h = [];
    columns.forEach((c) => {
      if (c)
        h.push({
          title: <p style={{ display: "inline", fontWeight: "bold" }}>{c}</p>,
          dataIndex: c,
          key: c,
          ellipsis: true,
          // sorter: (a, b) => moment(a.time).unix() - moment(b.time).unix(),
          render: (text) => (
            <Tooltip placement="topLeft" title={text}>
              {text}
            </Tooltip>
          ),
        });
    });
    setTableHeader(h);
  }, []);

  useEffect(() => {
    let tab = [];
    tabs.forEach((t) => {
      if (t) tab.push({ label: t, value: t });
    });
    SETTABS(tab);
  }, []);

  return (
    <Fragment>
      <Row style={{ margin: "18px 0 5px 0" }}>
        <Col xs={12} md={TABS.length > 0 ? 14 : 24}>
          <h5 className="main-heading">
            {heading}
            <small>{` ${subheading}`}</small>
          </h5>
        </Col>
        {TABS.length > 0 && (
          <Col xs={12} md={10}>
            <div style={{ float: "right" }}>
              <Radio.Group
                size={"small"}
                options={TABS}
                onChange={onChangeTab}
                value={activeTab}
                optionType="button"
                buttonStyle="solid"
              />
            </div>
          </Col>
        )}
      </Row>
      <div className={``}>
        <div className="table-tabs"></div>
      </div>
      <Table
        dataSource={tableData}
        pagination={false}
        columns={tableHeader}
        size={"small"}
        // rowClassName={(record, index) => {}}
      />
    </Fragment>
  );
}

export default DataTable;
