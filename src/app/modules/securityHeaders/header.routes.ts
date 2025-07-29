import express from "express";
import { headerController } from "./header.controller";
const router = express.Router();


router.get("/", headerController.getHeaders);

export const headerRoutes = router
