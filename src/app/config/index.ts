import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

export default {
  node_env: process.env.NODE_ENV,
  port: process.env.PORT,
  mongo_database_url: process.env.MONGO_DATABASE_URL,
  ahrefs_api_token: process.env.AHREFS_API_TOKEN,
};
