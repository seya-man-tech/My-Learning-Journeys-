import "dotenv/config";
import { GoogleGenAI } from "@google/genai";
const GEMINI_EMBEDDING_MODEL =
  process.env.GEMNI_EMBEDDING_MODEL || "gemini-embedding-001";
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
if (!GEMINI_API_KEY) {
  throw new error("GEMINI_API_KEY environmrnt variable is required");
}

const ai = new GoogleGenAI({ apikey: GEMINI_API_KEY });
async function generateEmbedding() {
  const text = "Hello, this is a test for vector embeding.";
  try {
    //2 genatrate embedding ...
    const result = await ai.models.embedContent({
      model: GEMINI_EMBEDDING_MODEL,
      contents: text,
      config: {
        outputDimensionality: 768,
      },
    });
    console.log(result.embeddings[0].values);
  } catch (error) {
    console.log("Error generating embedding:", error);
  }
}
generateEmbedding();





