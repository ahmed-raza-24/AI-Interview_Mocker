import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./utiles/schema.js",
   dbCredentials: {
    url: 'postgresql://neondb_owner:npg_Bi53pdomrcsf@ep-odd-credit-aqipph7k-pooler.c-8.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require'
  },
});