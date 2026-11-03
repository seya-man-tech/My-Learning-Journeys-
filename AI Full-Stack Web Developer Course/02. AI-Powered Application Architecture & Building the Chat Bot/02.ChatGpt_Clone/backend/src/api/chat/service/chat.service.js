
import db from "../../../../db/db.config.js";
import { GoogleGenAI } from "@google/genai";

const GEMINI_MODEL = process.env.GEMINI_MODEL || "gemini-3.8-flash";
const createGenAIClient = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export const getRecentConversationsService = async (limit = 5) => {
  const normalizedlimit = Number.parseInt(limit, 10);
  const safeLimit =
    Number.isNaN(normalizedlimit) || normalizedlimit <= 0
      ? 20
      : normalizedlimit;

 
  const [row] = await db.execute(
    `SELECT id, role, content, created_at FROM conversation ORDER BY id DESC LIMIT ?`,
    [safeLimit],
  );
  return row.reverse();
};

const generateAssistanceAnswer = async ({ historyRows, question }) => {
  const formattedHistory = historyRows.map((row) => ({
    role: row.role === "assistant" ? "model" : "user",
    parts: [{ text: row.content }],
  }));


  const chat = createGenAIClient.chats.create({
    model: GEMINI_MODEL,
    history: formattedHistory,
  });

    const result = await chat.sendMessage({ message: question });
    console.log(result.usageMetadata);
    return { text: result.text,totalTokens: result.usageMetadata.totalTokenCount };
};

export async function createConversationService(question) {
  try {
    if (!question || typeof question !== "string" || !question.trim()) {
      const error = new Error("Valid question is required");
      error.statusCode = 400;
      throw error;
    }

    const historyRows = await getRecentConversationsService(5);


    const [result] = await db.execute(
      `INSERT INTO conversation (content, role) VALUES (?, 'user')`,
      [question],
    );
 
    const aiAnswer = await generateAssistanceAnswer({ historyRows, question });

    
    await db.execute(
      `INSERT INTO conversation (content, role, token_count) VALUES (?, 'assistant', ?)`,
      [aiAnswer.text, aiAnswer.totalTokens],
    );

    return {
      historyRows,
      userQuestion: question,
      assistantResponse: aiAnswer,
      result,
    };
  } catch (error) {
    throw error;
  }
}