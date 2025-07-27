import express from 'express';
import { applySecurityMiddleware } from './app/middleware/security';

const app = express();

// Apply all security middlewares
applySecurityMiddleware(app);

app.get('/', (req, res) => {
  res.send('Hello Webkooker running...!');
});

export default app;
