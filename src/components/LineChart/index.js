import React, { useState, useEffect } from "react";
import { Line } from "@ant-design/charts";

const LineChart = ({ data = [], height = 250, colors = [] }) => {
  const [chartData, setChartData] = useState([]);
  useEffect(() => {
    setChartData(data);
  }, []);
  const COLOR_PLATE_10 = [
    "#5B8FF9",
    "#5AD8A6",
    "#5D7092",
    "#F6BD16",
    "#E8684A",
    "#6DC8EC",
    "#9270CA",
    "#FF9D4D",
    "#269A99",
    "#FF99C3",
  ];
  const config = {
    data: chartData,
    xField: "year",
    yField: "value",
    seriesField: "category",
    yAxis: {
      // type: "timeCat",
      tickCount: 5,
      // label: {
      //   formatter: function formatter(v:any) {
      //     return ''.concat(v).replace(/\d{1,3}(?=(\d{3})+$)/g, function (s) {
      //       return ''.concat(s, ',');
      //     });
      //   },
      // },
    },
    color: colors,
    point: {
      shape: function shape(_ref) {
        const category = _ref.category;
        return "circle";
      },
      style: function style(_ref2) {
        const year = _ref2.year;
        return { r: Number(year) % 4 ? 0 : 3 };
      },
    },
  };
  return <Line className="mb-3" {...config} height={height} />;
};

export default LineChart;
