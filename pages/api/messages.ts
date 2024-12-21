import clientPromise from "../../lib/mongodb";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const client = await clientPromise; // Connect to MongoDB
    const db = client.db("grok2"); // Connect to the 'grok2' database

    if (req.method === "POST") {
      // Insert a test document
      const result = await db.collection("messages").insertOne({ message: "Hello from MongoDB!" });
      return res.status(201).json({ success: true, data: result });
    }

    if (req.method === "GET") {
      // Fetch all documents from 'messages' collection
      const results = await db.collection("messages").find({}).toArray();
      return res.status(200).json({ success: true, data: results });
    }

    return res.status(405).json({ error: "Method Not Allowed" });
  } catch (error) {
    console.error("Database error:", error);
    return res.status(500).json({ success: false, error: "Internal Server Error" });
  }
}
