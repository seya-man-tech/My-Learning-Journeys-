import express from "express";
const chatRoutes = express.Router();

import {createConversationController, getConversationController} from "./controller/chat.controller.js";
chatRoutes.post("/conversations", createConversationController);

chatRoutes.get("/conversations", getConversationController);

export default chatRoutes;