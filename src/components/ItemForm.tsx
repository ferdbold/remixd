import { useState } from 'react'

interface ItemFormProps {
	onAddItem: (name: string) => void;
}

function ItemForm({ onAddItem }: ItemFormProps) {
	const [name, setName] = useState('');

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		if (name.trim()) {
			onAddItem(name)
			setName('')
		}
	};

	return (
		<form onSubmit={handleSubmit} className="mb-6">
			<div className="flex">
				<input
					type="text"
					value={name}
					onChange={(e) => setName(e.target.value)}
					placeholder="Enter item name"
					className="flex-grow border border-gray-300 rounded-l-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-cyan-500"
				/>
				<button
					type="submit"
					className="bg-cyan-500 text-white py-2 px-4 rounded-r-md hover:bg-cyan-600 transition duration-200"
				>
					Add Item
				</button>
			</div>
		</form>
	);
}

export default ItemForm;
