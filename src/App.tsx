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

  /*const addItem = async (name: string) => {
    try {
      const response = await fetch('http://localhost:5001/api/items', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name }),
      })
      const newItem = await response.json()
      setItems([...items, newItem])
    } catch (error) {
      console.error('Error adding item:', error)
    }
  }*/

  const chartOptions = {
    chart: {
      id: "basic-bar"
    },
    xaxis: {
      categories: ["18:00", "18:30", "20:00", "20:30", "21:00", "21:30", "22:00"]
    },
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
  /*<div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
    <div className="relative py-3 sm:max-w-xl sm:mx-auto">
      <div
        className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
      <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Vite + React + MongoDB App</h1>
          <div className="max-w-md mx-auto">
            <ItemForm onAddItem={addItem} />
            <ItemList items={items} />
          </div>
        </div>
      </div>
    </div>
  );*/
}

export default App;
