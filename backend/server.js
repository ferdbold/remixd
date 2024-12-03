import express from 'express';
import { get } from '@vercel/edge-config';
import cors from 'cors';

const app = express();
const port = 5001;

app.use(cors());
app.use(express.json());

const stocks = await get('stocks');

app.get('/api/stocks', async (req, res) => {
	try {
		res.json(stocks);
	} catch (error) {
		res.status(500).json({ error: 'Error fetching items' });
	}
});

app.post('/api/stocks', async (req, res) => {
	try {
		const { name } = req.body;
		const result = await itemsCollection.insertOne({ name });
		res.status(201).json({ _id: result.insertedId, name });
	} catch (error) {
		res.status(500).json({ error: 'Error adding item' });
	}
});

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
