import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Your MongoDB logic here
    res.status(200).json({ message: "MongoDB connection successful" });
  } catch (error) {
    console.error("MongoDB connection error:", error);

    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred";

    res.status(500).json({ error: errorMessage });
  }
}
