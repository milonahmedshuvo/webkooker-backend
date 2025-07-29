import { Router } from "express";
import { ahrefsControllers } from "./ahrefsController";

const router = Router();

router.post("/organicTraffic", ahrefsControllers.getOrganicTrafficController);

export const organicRoutes = router;

