
import { GoogleGenAI } from "@google/genai";
import { TOOLS_DATA } from "../constants";
import { Language } from "../types";

export const getAIResponse = async (userMessage: string, lang: Language = 'ar', userName: string = 'Operator') => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [{ role: 'user', parts: [{ text: userMessage }] }],
      config: {
        systemInstruction: `You are 'DEVARAB_STRIKE_AI', a senior Offensive Security Expert. 
        OPERATOR NAME: ${userName}.
        ARCHITECT: anis zidane.
        LANGUAGE: Respond in ${lang === 'ar' ? 'Arabic' : 'English'}.
        CORE KNOWLEDGE: Deep expertise in the 200 tools provided on this platform, Kali Linux, and Advanced Penetration Testing.
        INSTRUCTION: You MUST address the operator as ${userName} in your responses where appropriate.
        TONE: Highly technical, concise, and professional. 
        FORMATTING: Use terminal-style output. Wrap commands in code blocks. 
        SAFETY: Provide technical guidance for ethical and educational purposes only.`,
        temperature: 0.2,
      },
    });

    const text = response.text;
    return text || ">>> [ERROR] NO_RESPONSE_FROM_CENTRAL_CORE";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return ">>> [CRITICAL_ERROR] NEURAL_LINK_INTERRUPTED. Check Uplink/API_KEY.";
  }
};
