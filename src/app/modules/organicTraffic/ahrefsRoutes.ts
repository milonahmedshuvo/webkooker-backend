import { Router } from "express";
import { getOrganicTrafficController } from "./ahrefsController";
const router = Router();

router.post("/organicTraffic", getOrganicTrafficController);

export const organicRoutes = router;
