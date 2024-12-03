'use client'

import { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import { fetchStocks } from "./actions";

export default function Home() {
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

  return (
    <main className={"flex flex-col min-h-screen bg-slate-900 text-lime-500 px-2"}>
      <header className={"my-4"}>
        <h1 className={"text-6xl font-bold text-center"}>R.E.M.I.X.D.</h1>
        <h2 className={"italic text-sm text-center"}>Real Equity Maximum Income eXchange Department</h2>
      </header>

      {!!chartSeries && <Chart
        options={chartOptions}
        series={chartSeries}
        type="line"
        height="75%"
      />}
    </main>
  );
}
