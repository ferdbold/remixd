'use client';

import { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import { fetchStocks } from "../actions";

export default function RemixChart() {
  const [chartSeries, setChartSeries] = useState([]);

  useEffect(() => {
    refreshChart();
  }, []);

  async function refreshChart() {
    let stocks = await fetchStocks();
    setChartSeries(stocks);
  }
 
  const chartOptions = {
    stroke: {
      curve: 'smooth'
    },
    legend: {
      labels: {
        colors: 'grey',
      },
      markers: {
        size: 10,
        strokeWidth: 0
      }
    }
  };

  if (!chartSeries)
    return <></>;

  return <Chart
    options={chartOptions}
    series={chartSeries}
    type="line"
    height="75%"
  />
}
