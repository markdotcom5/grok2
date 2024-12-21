import clientPromise from "../../lib/mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const client = await clientPromise;
    const db = client.db("grok2");

    if (req.method === "POST") {
      const { email, password, username } = req.body;

      // Check if user exists
      const existingUser = await db.collection("users").findOne({ email });
      if (existingUser) {
        return res.status(400).json({ error: "User already exists" });
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Insert new user
      const result = await db.collection("users").insertOne({
        email,
        password: hashedPassword,
        username,
        createdAt: new Date(), // Add a createdAt timestamp
      });

      return res.status(201).json({ message: "User created", user: result.ops[0] });
    }

    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  } catch (error) {
    console.error("Database error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
