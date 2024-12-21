import clientPromise from "../../lib/mongodb";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const client = await clientPromise;
    res.status(200).json({ success: true, message: "Path resolved successfully" });
  } catch (error) {
    res.status(500).json({ success: false, error: "Error resolving path" });
  }
};

export default handler;
