'use client';

import { useState, useEffect, useRef } from "react";
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Colors } from "chart.js";
import { Line } from "react-chartjs-2";
import { fetchStocks } from "../actions";

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Colors);

const StockChart = () => {
  const [chartData, setChartData] = useState([]);
  const [selectedStock, setSelectedStock] = useState("");
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

  return <div className="flex-1 flex flex-col w-full">
    <div className="w-full flex-1" ref={containerRef}>
      <ChartWrapper
        data={chartData}
        width={containerRef.current !== null ? containerRef.current.offsetWidth : 100}
        height={containerRef.current !== null ? containerRef.current.offsetHeight : 100}
      />
    </div>
      <ul className="flex flex-row my-2 px-2 gap-2 overflow-x-scroll">
        {chartData.datasets.map((entry) => {
          return <li key={entry.label}>
            <button
              onClick={() => setSelectedStock(entry.label)}
              className={`${selectedStock === entry.label ? 'bg-green-500 text-white' : 'bg-green-500/25 text-green-500'} relative z-100 px-3 py-0.5 rounded-md font-bold`}>
                {entry.label}
            </button>
          </li>
        })}
      </ul>
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
