import { defineConfig } from "drizzle-kit";
import * as dotenv from "dotenv";
dotenv.config({ path: ".env.local" });


export default defineConfig({
  dialect: "postgresql",
  schema: "./utiles/schema.js",
   dbCredentials: {
    url: process.env.NEXT_PUBLIC_DRIZZLE_DB_URL,
  },
});