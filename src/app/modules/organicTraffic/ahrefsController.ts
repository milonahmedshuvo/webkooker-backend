import { Request, Response } from "express";
import { fetchOrganicTraffic } from "./ahrefsService";

export const getOrganicTrafficController = async (
  req: Request,
  res: Response
) => {
  const { domain } = req.body;

  try {
    const traffic = await fetchOrganicTraffic(domain);
    res.status(200).json({
      status: true,
      message: "Retrive Organic Traffic success",
      data: traffic,
    });
  } catch (error: any) {
    console.error("Ahrefs Controller Error:", error.message);
    res.status(500).json({ error: "Failed to fetch Ahrefs data" });
  }
};

const ahrefsControllers = {
  getOrganicTrafficController,
};
