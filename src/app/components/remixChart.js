'use client';

import { useState, useEffect } from "react";
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Colors } from "chart.js";
import { Line } from "react-chartjs-2";
import { fetchStocks } from "../actions";

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Colors);

const RemixChart = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    refreshChart();
  }, []);

  async function refreshChart() {
    let stocks = await fetchStocks();
    setChartData(stocks);
  }
 
  const options = {
    responsive: true,
  };

  if (chartData.length === 0)
    return <></>;

  return <Line
    data={chartData}
    options={options}
    height={350}
  />
}
export default RemixChart;
