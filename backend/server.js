import express from 'express';
import { MongoClient, ObjectId } from 'mongodb';
import cors from 'cors';

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);

async function connectToMongoDB() {
	try {
		await client.connect();
		console.log('Connected to MongoDB');
	} catch (error) {
		console.error('Error connecting to MongoDB:', error);
	}
}

connectToMongoDB();

const db = client.db('vite-react-app');
const itemsCollection = db.collection('items');

app.get('/api/items', async (req, res) => {
	try {
		const items = await itemsCollection.find().toArray();
		res.json(items);
	} catch (error) {
		res.status(500).json({ error: 'Error fetching items' });
	}
});

app.post('/api/items', async (req, res) => {
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
