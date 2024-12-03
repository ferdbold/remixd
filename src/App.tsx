import { useState, useEffect } from 'react'
import Chart from "react-apexcharts";

interface Item {
  name: string;
  color: string;
  data: number[]
}

function App() {
  const [chartSeries, setChartSeries] = useState<Item[]>([]);

  useEffect(() => {
    fetchStocks();
  }, []);

  const fetchStocks = async () => {
    try {
      const response = await fetch('http://localhost:5001/api/stocks')
      const data = await response.json()
      setChartSeries(data)
    } catch (error) {
      console.error('Error fetching items:', error)
    }
  }

  const chartOptions = {
    stroke: {
      curve: 'smooth' as const
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

export default App;
