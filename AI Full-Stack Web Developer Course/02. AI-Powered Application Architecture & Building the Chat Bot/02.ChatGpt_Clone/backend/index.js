
import "dotenv/config";
import express from "express";
import db from "./db/db.config.js";

const app = express();
app.post("api/conversations", (req, res) => {
    res.send("post methode");
});
app.get("api/conversations", (req, res) => {
  res.send("get methode");
});
async function startServer() {
  try {
      const connection = await db.getConnection();
      connection.release();
    console.log("db connected");
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
