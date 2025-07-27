// middleware/security.ts

import helmet from 'helmet';
import cors from 'cors';
import hpp from 'hpp';
import xss from 'xss';
import { Request, Response, NextFunction } from 'express';

// Input sanitize function
const sanitizeInput = (obj: any) => {
  const sanitized: any = {};
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      sanitized[key] = xss(obj[key]);
    } else {
      sanitized[key] = obj[key];
    }
  }
  return sanitized;
};

// Main security middlewares
export const applySecurityMiddleware = (app: any) => {
  app.use(helmet());
  app.use(cors());
  app.use(hpp());

  // Custom sanitization middleware
  app.use((req: Request, res: Response, next: NextFunction) => {
    if (req.query) req.sanitizedQuery = sanitizeInput(req.query);
    if (req.body) req.sanitizedBody = sanitizeInput(req.body);
    next();
  });
};
