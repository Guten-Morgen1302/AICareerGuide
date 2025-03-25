
import type { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from "openai";
import { getMockChatResponse } from "../server/mockData";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || "your-api-key",
});

export const config = {
  api: {
    bodyParser: true,
  },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  // Handle preflight OPTIONS request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { message } = req.body;
    
    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    try {
      const response = await openai.chat.completions.create({
        model: "gpt-4",
        messages: [
          {
            role: "system",
            content: "You are NEXUS, a cyberpunk-styled AI career assistant. Provide concise, helpful career advice with a futuristic tone. Focus on emerging tech careers, skill development, and learning resources. Keep responses under 150 words and include specific, actionable advice."
          },
          { role: "user", content: message }
        ]
      });

      const aiResponse = response.choices[0].message.content;
      res.status(200).json({ response: aiResponse });
    } catch (apiError) {
      console.error("OpenAI API error, using fallback response:", apiError);
      const mockResponse = getMockChatResponse(message);
      res.status(200).json(mockResponse);
    }
  } catch (error) {
    console.error("Error in chat:", error);
    const mockResponse = getMockChatResponse("help");
    res.status(200).json(mockResponse);
  }
}
