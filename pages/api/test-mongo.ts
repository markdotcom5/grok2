import { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (!uri) {
      throw new Error("❌ MongoDB URI is missing in .env.local");
    }

    const client = await MongoClient.connect(uri);
    const db = client.db("grok2"); // Replace "grok2" with your database name

    // Insert a test document into a "test" collection
    const result = await db.collection("test").insertOne({ message: "MongoDB connected!" });

    await client.close();

    res.status(200).json({
      message: "MongoDB Connected!",
      result,
    });
  } catch (error) {
    console.error("MongoDB connection error:", error);
    res.status(500).json({ error: error.message });
  }
}
