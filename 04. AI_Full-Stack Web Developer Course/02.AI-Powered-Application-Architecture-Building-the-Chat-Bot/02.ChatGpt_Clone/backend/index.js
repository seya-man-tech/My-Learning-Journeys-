import "dotenv/config";
import express from "express";
import cors from "cors";
import db from "./db/db.config.js";
import { errorHandler } from "./src/middleware/error-handler.js";
import mainRoutes from "./src/api/main.routes.js";
const app = express();
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());
app.use("/api", mainRoutes);
app.use(errorHandler);
async function startServer() {
  try {
    const connection = await db.getConnection();
    connection.release();
    console.log("database is connected successfully");
    app.listen(3004, (err) => {
      if (err) {
        throw err;
      }
      console.log("Server is Listening in port http://localhost:3004");
    });
  } catch (error) {
    console.log("Error Starting Server:", error.message);
  }
}
startServer();
