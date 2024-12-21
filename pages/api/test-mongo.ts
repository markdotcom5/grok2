import clientPromise from "../../lib/mongodb";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const client = await clientPromise;
    const db = client.db("grok2");

    if (req.method === "POST") {
      const result = await db.collection("users").insertOne({
        email: req.body.email,
        createdAt: new Date(),
        lastLogin: new Date(),
        spaceCredits: 0,
        trainingProgress: {
          physical: 0,
          mental: 0,
          spiritual: 0,
        },
      });
      return res.status(201).json({ success: true, data: result });
    }

    if (req.method === "GET") {
      const results = await db.collection("users").find({}).toArray();
      return res.status(200).json({ success: true, data: results });
    }

    return res.status(405).json({ error: "Method Not Allowed" });
  } catch (error) {
    console.error("Database error:", error);
    return res.status(500).json({ success: false, error: "Internal Server Error" });
  }
}
