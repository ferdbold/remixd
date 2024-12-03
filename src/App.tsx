import { useState, useEffect } from 'react'
import ItemForm from './components/ItemForm'
import ItemList from './components/ItemList'

interface Item {
  _id: string;
  name: string;
}

function App() {
  const [items, setItems] = useState<Item[]>([])

  useEffect(() => {
    fetchItems()
  }, [])

  const fetchItems = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/items')
      const data = await response.json()
      setItems(data)
    } catch (error) {
      console.error('Error fetching items:', error)
    }
  }

  const addItem = async (name: string) => {
    try {
      const response = await fetch('http://localhost:5000/api/items', {
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
  }

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Vite + React + MongoDB App</h1>
          <div className="max-w-md mx-auto">
            <ItemForm onAddItem={addItem} />
            <ItemList items={items} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
