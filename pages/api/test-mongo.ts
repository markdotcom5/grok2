// pages/api/test-mongodb.ts
import clientPromise from '../../lib/mongodb';

export default async (req, res) => {
  try {
    const client = await clientPromise;
    const db = client.db('myFirstDatabase'); // Change to your database name

    const data = await db.collection('myCollection').find({}).toArray(); // Change to your collection name

    res.status(200).json(data);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
};
