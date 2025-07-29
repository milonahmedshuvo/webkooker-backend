import { Request, Response } from "express";
import { headerService } from "./header.service";


const getHeaders = async (req: Request, res: Response) => {
  const url = req.query.url;

  console.log("URL:", url)

  if (!url || typeof url !== "string") {
    return res.status(400).json({ error: "URL parameter is required and must be a string." });
  }

  try {
    const headers = await headerService.fetchHeaders(url);
    res.json(headers);
  } catch (error) {
    console.error("Header fetch error:", error);
    res.status(500).json({ error: "Failed to fetch headers." });
  }
};

export const headerController = {
  getHeaders,
};
