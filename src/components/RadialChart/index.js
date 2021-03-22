import React from "react";
import Chart from "react-apexcharts";
import { Row, Col } from "antd";
import "../DataTable/index.css";

function RadialChart({
  chartHeading = "",
  legends = [],
  data = [],
  size = "34",
  width = 160,
  height = 160,
}) {
  const options = {
    chart: {
      height: 130,
      type: "radialBar",
      sparkline: {
        enabled: true,
      },
    },
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 8,
          size,
          background: "transparent",
          image: undefined,
        },
        track: {
          show: true,
          startAngle: undefined,
          endAngle: undefined,
          background: "#EBEBEB",
          strokeWidth: "100%",
          opacity: 1,
          margin: 5,
        },
        dataLabels: {
          show: true,
          name: {
            show: true,
            fontSize: "12px",
            fontFamily: undefined,
            fontWeight: 600,
            color: undefined,
            offsetY: -4,
          },
          value: {
            show: true,
            fontSize: "12px",
            fontFamily: undefined,
            fontWeight: 400,
            color: undefined,
            offsetY: 0,
            formatter: function (val) {
              return val;
            },
          },
          total: {
            show: true,
            label: legends[0] ? legends[0].text : "",
            fontSize: "12px",
            formatter: function (w) {
              // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
              return data[0];
            },
          },
        },
      },
      responsive: [
        {
          breakpoint: 500,
          options: {
            plotOptions: {
              radialBar: {
                dataLabels: {
                  show: false,
                },
              },
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
    labels: [
      legends[0] ? legends[0].text : "",
      legends[1] ? legends[1].text : "",
      legends[2] ? legends[2].text : "",
      legends[3] ? legends[3].text : "",
    ],
    colors: [
      legends[0] ? legends[0].color : "",
      legends[1] ? legends[1].color : "",
      legends[2] ? legends[2].color : "",
      legends[3] ? legends[3].color : "",
    ],
  };

  const styles = {
    mainContainer: {
      flexDirection: "row",
      display: "flex",
      alignItems: "center",
    },
    colorBox: {
      width: 10,
      height: 10,
      display: "inline-flex",
      marginRight: 5,
    },
    legendBox: {
      flexDirection: "row",
      alignItems: "center",
      display: "flex",
      marginBottom: 5,
      marginLeft: 5,
    },
    legendText: { fontSize: 11, marginBottom: 0 },
    headContainer: { marginTop: 0, marginBottom: 10 },
    cardHeading: {
      marginRight: 5,
      marginLeft: 5,
      fontWeight: "bold",
      display: "inline",
    },
  };

  return (
    <Row>
      <Col xs={24} sm={12} className="mt-3">
        <div style={styles.headContainer}>
          <h5 className="main-heading">{chartHeading} </h5>
        </div>
        {legends.map((l, i) => (
          <div key={i} style={styles.legendBox}>
            <div style={{ ...styles.colorBox, backgroundColor: l.color }} />
            <p style={styles.legendText}>{l.text}</p>
          </div>
        ))}
      </Col>
      <Col
        xs={24}
        sm={12}
        style={{
          alignItems: "flex-end",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Chart
          options={options}
          series={data}
          type="radialBar"
          width={width}
          height={height}
        />
      </Col>
    </Row>
  );
}

export default RadialChart;
