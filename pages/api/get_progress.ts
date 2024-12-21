import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
  const client = new MongoClient(process.env.MONGODB_URI);

  try {
    await client.connect();
    const db = client.db("grok2");
    const data = await db.collection("leaderboard").findOne();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Database error" });
  } finally {
    await client.close();
  }
}
