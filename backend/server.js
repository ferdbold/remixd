import express from 'express';
import { createClient } from '@vercel/edge-config';
import cors from 'cors';

const app = express();
const port = 5001;

const edge = createClient("https://edge-config.vercel.com/ecfg_ujrysgakrollwa1ihqqlvifvgdpv?token=7baf9476-97f2-447d-a25e-35b770a87ba7");

app.use(cors());
app.use(express.json());

const stocks = await edge.get('stocks');

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
