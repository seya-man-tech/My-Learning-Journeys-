import express from "express";
import chatROutes from "./chat/chat.routes.js";
const mainRoutes = express.Router();
///api/chat
mainRoutes.use("/chat", chatROutes);
export default mainRoutes;