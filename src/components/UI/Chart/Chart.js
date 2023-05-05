import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import axios from "axios";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "@mui/material";
import { Chart as ChartJS } from "chart.js/auto";
import { Chart } from "react-chartjs-2";
import Master from "../Layout/Master";
const RevenueChart = () => {
  const [monthYearFillter, setMonthYearFillter] = useState({
    month: "",
    year: "2023",
  });
  const [revenueOfMonth, setrevenueOfMonth] = useState("");
  const [revenueOfYear, setrevenueOfYear] = useState("");
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: "Income",
        data: [],
        backgroundColor: "rgba(54, 162, 235, 1)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
      {
        label: "Expense",
        data: [],
        backgroundColor: "rgb(255, 0, 0)",
        borderColor: "rgb(255, 0, 0)",
        borderWidth: 1,
      },
    ],
  });

  useEffect(() => {
    axios
      .get(
        `http://localhost:8000/api/report=${localStorage.getItem(
          "idUser"
        )}`
      )
      .then((response) => {
        const labels = response.data.map((item) => `${item.homes_title}`);
        const revenues = response.data.map((item) => item.revenue);

        setChartData({
          labels,
          datasets: [
            {
              label: "Thang",
              data: revenues,
              backgroundColor: "rgba(54, 162, 235, 1)",
              borderColor: "rgba(54, 162, 235, 1)",
              borderWidth: 1,
            },
          ],
        });
      });
    axios
      .get(
        `http://localhost:3002/api/report=${localStorage.getItem(
          "idUser"
        )}`
      )
      .then((response) => {
        setrevenueOfMonth(response.data.total_revenue);
      });
    axios
      .get(
        `http://localhost:8000/api/report=${localStorage.getItem(
          "idUser"
        )}`
      )
      .then((response) => {
        setrevenueOfYear(response.data.total_revenue);
      });
  }, []);
  const handleChange = (event) => {
    setMonthYearFillter({
      ...monthYearFillter,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmitFillter = () => {
    axios
      .get(
        `http://localhost:8000/api/report=${localStorage.getItem(
          "idUser"
        )}&&month=${monthYearFillter.month}&&year=${monthYearFillter.year}`
      )
      .then((response) => {
        const labels = response.data.map((item) => `${item.homes_title}`);
        const revenues = response.data.map((item) => item.revenue);

        setChartData({
          labels,
          datasets: [
            {
              label: "Thang",
              data: revenues,
              backgroundColor: "rgba(54, 162, 235, 0.2)",
              borderColor: "rgba(54, 162, 235, 1)",
              borderWidth: 1,
            },
            
          ],
        });
      });
    handleSubmitFillterTotal();
  };

  const handleSubmitFillterTotal = () => {
    axios
      .get(
        `http://localhost:8000/api/report=${localStorage.getItem(
          "idUser"
        )}&&month=${monthYearFillter.month}&&year=${monthYearFillter.year}`
      )
      .then((response) => {
        setrevenueOfMonth(response.data.total_revenue);
      });
    axios
      .get(
        `http://localhost:8000/api/report=${localStorage.getItem(
          "idUser"
        )}&&year=${monthYearFillter.year}`
      )
      .then((response) => {
        setrevenueOfYear(response.data.total_revenue);
      });
  };

  return (
    <Master>
      <div >
        <Row>
          <Col sm={8}>
            <div >
              <Bar
                options={{
                  maintainAspectRatio: false,
                  responsive: true,
                  barThickness: 110,
                }}
                data={chartData}
              />
            </div>
          </Col>
          <Col sm={4}>
            <div style={{ marginLeft: "40%" }}>
              <h3>Revenue Report</h3>
            </div>
            <div style={{ marginLeft: "40px" }}>
              <Row style={{ marginTop: "40px" }}>
                <Col sm={4}>
                  <h5 style={{ margin: 0 }}>Year:</h5>
                  <select name="year" onChange={handleChange}>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                  </select>
                </Col>
                <Col sm={4}>
                  <h5 style={{ margin: 0 }}>Month:</h5>
                  <select name="month" onChange={handleChange}>
                    <option value="1">January</option>
                    <option value="2">February</option>
                    <option value="3">March</option>
                    <option value="4">April</option>
                    <option value="5">May</option>
                    <option value="6">June</option>
                    <option value="7">July</option>
                    <option value="8">August</option>
                    <option value="9">September</option>
                    <option value="10">October</option>
                    <option value="11">November</option>
                    <option value="12">December</option>
                  </select>
                </Col>
                <Col sm={4}>
                  <Button
                    onClick={handleSubmitFillter}
                    style={{ marginTop: "13px", background: "#f7a800" }}
                    variant="contained"
                  >
                    Select
                  </Button>
                </Col>
              </Row>
              <Row style={{ marginTop: "70px" }}>
                <h5>
                  Total revenue in the month:{" "}
                  {revenueOfMonth != null
                    ? Number(revenueOfMonth).toLocaleString("en-EN") + " VNĐ"
                    : "0 VNĐ"}
                </h5>
              </Row>
              <Row style={{ marginTop: "70px" }}>
                <h5>
                  Total revenue of year:{" "}
                  {revenueOfYear != null
                    ? Number(revenueOfYear).toLocaleString() + " VNĐ"
                    : "0 VNĐ"}
                </h5>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    </Master>
  );
};

export default RevenueChart;
