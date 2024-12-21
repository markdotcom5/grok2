import { MongoClient } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const client = new MongoClient(process.env.MONGODB_URI);

  try {
    await client.connect();
    const db = client.db("grok2");
    const data = await db.collection("leaderboard").find({}).toArray(); // Changed to find many
    res.status(200).json(data);
  } catch (error) {
    console.error("Database error:", error); // Log the error for debugging
    res.status(500).json({ error: "Internal Server Error" });
  } finally {
    await client.close();
  }
}
