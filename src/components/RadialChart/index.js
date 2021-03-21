import React from "react";
import Chart from "react-apexcharts";
import { Row, Col } from "antd";
// import "../../custom.css";

function RadialBarChart({ chartHeading = "" }) {
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
          size: "48",
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
            fontSize: "14px",
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
            label: "Total",
            fontSize: "14px",
            formatter: function (w) {
              // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
              return 85;
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
    labels: ["Total", "Active", "Inactive"],
    colors: ["#29B9CB", "#84E99C", "#0CA5D5"],
  };
  const series = [85, 55, 30];

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
    legendText: { fontSize: 10, marginBottom: 0, marginRight: 10 },
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
      <Col
        xs={24}
        sm={12}
        style={{
          alignItems: "flex-start",
          display: "flex",
          flexDirection: "column",
          marginTop: 10,
        }}
      >
        <div style={styles.headContainer}>
          <h5 className="customH3">{chartHeading} </h5>
        </div>
        <div style={styles.legendBox}>
          <div style={{ ...styles.colorBox, backgroundColor: "#29B9CB" }} />
          <p style={styles.legendText}>Total</p>
        </div>
        <div style={styles.legendBox}>
          <div style={{ ...styles.colorBox, backgroundColor: "#84E99C" }} />
          <p style={styles.legendText}>Active</p>
        </div>
        <div style={styles.legendBox}>
          <div style={{ ...styles.colorBox, backgroundColor: "#0CA5D5" }} />
          <p style={styles.legendText}>In active</p>
        </div>
      </Col>
      <Col
        xs={24}
        sm={12}
        style={{
          alignItems: "flex-end",
          display: "flex",
          flexDirection: "column",
          // justifyContent: "center",
        }}
      >
        <Chart
          options={options}
          series={series}
          type="radialBar"
          width={"180"}
          height={"180"}
        />
      </Col>
    </Row>
  );
}

export default RadialBarChart;
