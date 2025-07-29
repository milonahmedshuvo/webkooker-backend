import express from "express";
import { applySecurityMiddleware } from "./app/middleware/security";
import { organicRoutes } from "./app/modules/organicTraffic/ahrefsRoutes";
import { headerRoutes } from "./app/modules/securityHeaders/header.routes";

const app = express();
app.use(express.json());
// Apply all security middlewares
applySecurityMiddleware(app);

// Application Routes
app.use("/api/ahrefs", organicRoutes);
app.use("/api/header", headerRoutes)


app.get("/", (req, res) => {
  res.send("Hello Webkooker running...!");
});



export default app;
