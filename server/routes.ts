import { Express } from 'express';
import OpenAI from 'openai';
import { careerInputSchema } from '../shared/schema';
import { getMockChatResponse, mockCareerData } from './mockData';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || "your-api-key",
});

export function setupRoutes(app: Express) {
  app.post('/api/chat', async (req, res) => {
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
        res.json({ response: aiResponse });
      } catch (apiError) {
        console.error("OpenAI API error, using fallback response:", apiError);
        const mockResponse = getMockChatResponse(message);
        res.json(mockResponse);
      }
    } catch (error) {
      console.error("Error in chat:", error);
      const mockResponse = getMockChatResponse("help");
      res.json(mockResponse);
    }
  });

  app.post('/api/analyze-career', async (req, res) => {
    try {
      const validatedInput = careerInputSchema.parse(req.body);

      try {
        const prompt = `
          I need career recommendations based on the following profile:
          Name: ${validatedInput.name}
          Education Level: ${validatedInput.education}
          Skills: ${validatedInput.skills}
          Interests: ${validatedInput.interests}
          Career Goals: ${validatedInput.careerGoals}

          Please provide 3 career path recommendations with the following information:
          1. Career title
          2. Match percentage (between 75-95%)
          3. Required skills (list of 4-6 skills)
          4. Skill gaps (list of 2-3 skills the person doesn't have but needs)
          5. Recommended courses (list of 2 courses or certifications)`;

        const response = await openai.chat.completions.create({
          model: "gpt-4",
          messages: [{ role: "user", content: prompt }],
          response_format: { type: "json_object" }
        });

        const content = response.choices[0].message.content;
        const careerData = JSON.parse(content);
        res.json(careerData);
      } catch (apiError) {
        console.error("OpenAI API error, using fallback response:", apiError);
        res.json(mockCareerData);
      }
    } catch (error) {
      console.error("Error analyzing career:", error);
      res.json(mockCareerData);
    }
  });
}
