import express from "express";
import { applySecurityMiddleware } from "./app/middleware/security";
import { organicRoutes } from "./app/modules/organicTraffic/ahrefsRoutes";

const app = express();

// Apply all security middlewares
applySecurityMiddleware(app);

// Application Routes
app.use("/api/ahrefs", organicRoutes);

app.get("/", (req, res) => {
  res.send("Hello Webkooker running...!");
});

export default app;
