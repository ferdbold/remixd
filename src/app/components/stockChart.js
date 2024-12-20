'use client';

import { useState, useEffect, useRef } from "react";
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Colors } from "chart.js";
import { Line } from "react-chartjs-2";
import { fetchEggChartForSlug, fetchStocks } from "../actions";

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Colors);

const StockChart = ({ showNav = true, eggSlug = null }) => {
  const [chartData, setChartData] = useState([]);
  const [selectedStock, setSelectedStock] = useState("");
  const containerRef = useRef(null);

  useEffect(() => {
    refreshChart();
  }, []);

  const filteredData = structuredClone(chartData);

  async function refreshChart() {
    let stocks = eggSlug !== null
      ? await fetchEggChartForSlug(eggSlug)
      : await fetchStocks();
    setChartData(stocks);
  }

  if (chartData.length === 0)
    return <div className="flex-1"></div>;

  // Filter by selected studio
  filteredData.datasets = selectedStock !== ""
    ? chartData.datasets.filter(el => el.label === selectedStock)
    : chartData.datasets;

  // Filter by time advancing
  const d = new Date();
  const h = d.getHours();
  const m = d.getMinutes();
  let timeCursor = 1 + Math.max(0, Math.min(24, Math.floor((h - 17) * 6 + (m / 10))));

  if (d.getTime() < new Date("December 6, 2024 17:00:00").getTime())
    timeCursor = 0;

  if (eggSlug !== null)
    timeCursor = 25;

  for (let i = 0; i < filteredData.datasets.length; ++i) {
    const maxValue = Math.min(timeCursor, filteredData.datasets[i].data.length);
    filteredData.datasets[i].data = filteredData.datasets[i].data.slice(0, maxValue);
  }

  return <div className="flex-1 flex flex-col w-full">
    <div className="w-full flex-1" ref={containerRef}>
      <ChartWrapper
        data={filteredData}
        width={containerRef.current !== null ? containerRef.current.offsetWidth : 100}
        height={containerRef.current !== null ? containerRef.current.offsetHeight : 100}
      />
    </div>
    {showNav && <ul className="flex flex-row my-2 px-2 gap-2 overflow-x-scroll">
      {chartData.datasets.map((entry) => {
        return <li key={entry.label}>
          <button
            onClick={() => selectedStock !== entry.label ? setSelectedStock(entry.label) : setSelectedStock('')}
            style={{ backgroundColor: entry.color }}
            className={`${selectedStock === entry.label ? 'text-black' : 'text-green-200'} px-3 py-0.5 rounded-md font-bold`}>
              {entry.label}
          </button>
        </li>
      })}
    </ul>}
  </div>
}
export default StockChart;

const ChartWrapper = ({ data, width, height }) => {
  const options = {
    cubicInterpolationMode: 'monotone',
    responsive: true,
    maintainAspectRatio: false,
    elements: {
      line: {
        borderColor: (ctx) => ctx.dataset.color,
        borderWidth: 5,
      },
      point: {
        pointBackgroundColor: (ctx) => ctx.dataset.color,
        radius: 2,
      }
    }
  };

  return <Line
    data={data}
    options={options}
    width={width}
    height={height}
  />;
}
