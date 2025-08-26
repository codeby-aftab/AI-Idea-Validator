
import { GoogleGenAI } from "@google/genai";
import { SYSTEM_PROMPT } from '../constants';

if (!process.env.API_KEY) {
    console.error("API_KEY environment variable not set. The application will not be able to connect to the Gemini API.");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY! });

export const validateIdea = async (idea: string): Promise<string> => {
  if (!process.env.API_KEY) {
      throw new Error("API key is not configured.");
  }
  
  const userPrompt = `User Idea: ${idea}`;
  const fullPrompt = `${SYSTEM_PROMPT}\n\n${userPrompt}`;

  try {
    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: fullPrompt,
        config: {
          temperature: 0.7,
          topP: 0.95,
        }
    });

    const text = response.text;
    if (!text) {
        throw new Error("Received an empty response from the API.");
    }
    return text;
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    throw new Error("Could not get a response from the AI. Please check your API key and network connection.");
  }
};
