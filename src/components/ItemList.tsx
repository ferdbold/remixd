interface Item {
	_id: string;
	name: string;
}

interface ItemListProps {
	items: Item[];
}

function ItemList({ items }: ItemListProps) {
	return (
		<div>
			<h2 className="text-xl font-semibold mb-4 text-gray-700">Items:</h2>
			{items.length === 0 ? (
				<p className="text-gray-500">No items added yet.</p>
			) : (
				<ul className="space-y-2">
					{items.map((item) => (
						<li
							key={item._id}
							className="bg-gray-50 rounded-md py-2 px-4 flex items-center shadow-sm"
						>
							<span className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></span>
							<span className="text-gray-800">{item.name}</span>
						</li>
					))}
				</ul>
			)}
		</div>
	)
}

export default ItemList;
