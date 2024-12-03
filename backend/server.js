import express from 'express';
import { Redis } from '@upstash/redis';
import cors from 'cors';
import 'dotenv/config';

const app = express();
const port = 5001;
const redis = Redis.fromEnv();

app.use(cors());
app.use(express.json());

let chart = await redis.json.get("chart");

app.get('/api/stocks', async (req, res) => {
	try {
		res.json(chart);
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
