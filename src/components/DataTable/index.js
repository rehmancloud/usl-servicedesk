import { Radio, Table, Tooltip } from "antd";
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
  }, [columns]);

  useEffect(() => {
    let tab = [];
    tabs.forEach((t) => {
      if (t) tab.push({ label: t, value: t });
    });
    SETTABS(tab);
  }, [tabs]);

  return (
    <Fragment>
      <div className={``}>
        <h5 className="customH3">
          {heading}
          <small>{subheading}</small>
        </h5>
        <span className="customSwitch">
          <Radio.Group
            size={"small"}
            options={TABS}
            onChange={onChangeTab}
            value={activeTab}
            optionType="button"
            buttonStyle="solid"
          />
        </span>
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
