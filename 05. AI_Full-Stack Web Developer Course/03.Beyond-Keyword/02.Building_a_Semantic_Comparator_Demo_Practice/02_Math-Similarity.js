import "dotenv/config";
import { GoogleGenAI } from "@google/genai";
const GEMINI_EMBEDDING_MODEL =
  process.env.GEMNI_EMBEDDING_MODEL || "gemini-embedding-001";
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
if (!GEMINI_API_KEY) {
    throw new error("GEMINI_API_KEY environmrnt variable is required");
    
}

// =======================================================================================
// MATHEMATICAL FORMULA: COSINE SIMILARITY
//
// Formula:  Cosine Similarity = (A · B) / (||A|| * ||B||)
//
// Where:
//   - A · B        = Dot Product (sum of matching element products: ∑(A[i] * B[i]))
//   - ||A||        = Magnitude of Vector A (sqrt(∑(A[i]²)))
//   - ||B||        = Magnitude of Vector B (sqrt(∑(B[i]²)))
//   - Score Range  = -1.0 (Opposite) to 1.0 (Identical Direction)
// =======================================================================================








// Cosine Similarity = (A . B) / (||A|| * ||B||)
function cosineSimilarity(vecA, vecB) {
  // 0. Check if the vectors have the same length
  if (vecA.length !== vecB.length) {
    throw error("Vectors must have the same length");
  }
  // 1. Dot Product (multipy matching components and sum)
  let dotProduct = 0;

    // // 2. Magnitude (Length of each vectors)
    // let magnitudeA = 0;
    // let magnitudeB = 0;
    // for (let i = 0; i < vecA.length; i++) {
    //     dotProduct += vecA[i] * vecB[i];
    //     magnitudeA += vecA[i] * vecA[i];
    //     magnitudeB += vecB[i] * vecB[i];
    // }
    // magnitudeA = Math.sqrt(magnitudeA);
    //  magnitudeB = Math.sqrt(magnitudeB);
    //  return dotProduct / (magnitudeA * magnitudeB);
    // }







  for (let i = 0; i < vecA.length; i++) {
    dotProduct += vecA[i] * vecB[i];
  }
  // 2. Magnitude (Length of each vectors)
  let magnitudeA = 0;
  let magnitudeB = 0;

  for (let i = 0; i < vecA.length; i++) {
    magnitudeA += vecA[i] * vecA[i];
  }
  magnitudeA = Math.sqrt(magnitudeA);

  for (let i = 0; i < vecB.length; i++) {
    magnitudeB += vecB[i] * vecB[i];
  }

    magnitudeB = Math.sqrt(magnitudeB);
    if (magnitudeA == 0 || magnitudeB == 0) {
        return 0;
    }

  return dotProduct / (magnitudeA * magnitudeB);
}
// Example 1: Identical direction (Scaled up)
const vector1 = [1, 2];
const vector2 = [2, 4];
console.log(cosineSimilarity(vector1,vector2));


