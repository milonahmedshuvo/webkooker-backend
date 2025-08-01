// src/types/express.d.ts
import "express";

declare global {
  namespace Express {
    interface Request {
      sanitizedQuery?: Record<string, any>;
      sanitizedBody?: Record<string, any>;
    }
  }
}
