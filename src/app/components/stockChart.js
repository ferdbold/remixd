'use client';

import { useState, useEffect, useRef } from "react";
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Colors } from "chart.js";
import { Line } from "react-chartjs-2";
import { fetchStocks } from "../actions";

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Colors);

const StockChart = () => {
  const [chartData, setChartData] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    refreshChart();
  }, []);

  async function refreshChart() {
    let stocks = await fetchStocks();
    setChartData(stocks);
  }

  if (chartData.length === 0)
    return <></>;

  return <div className="flex-1" ref={containerRef}>
    <ChartWrapper
      data={chartData}
      width={containerRef.current !== null ? containerRef.current.offsetWidth : 100}
      height={containerRef.current !== null ? containerRef.current.offsetHeight : 100}
    />
  </div>
}
export default StockChart;

const ChartWrapper = ({ data, width, height }) => {
  const options = {
    responsive: true,
    maintainAspectRatio: false
  };

  return <Line
    data={data}
    options={options}
    width={width}
    height={height}
  />;
}
