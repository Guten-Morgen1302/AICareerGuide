import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import OpenAI from "openai";
import { careerInputSchema, insertCareerSchema, insertChatHistorySchema } from "@shared/schema";
import { ZodError } from "zod";
import { mockCareerData, getMockChatResponse } from "./mockData";

// Initialize OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || "your-api-key",
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Analyze career path based on user input
  app.post("/api/analyze-career", async (req, res) => {
    try {
      // Validate the input
      const validatedInput = careerInputSchema.parse(req.body);
      
      try {
        // Format the prompt for OpenAI
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
          5. Recommended courses (list of 2 courses or certifications)
          
          Format the response as a JSON object with the structure:
          {
            "careers": [
              {
                "title": "Career Title",
                "matchPercentage": 85,
                "requiredSkills": ["Skill 1", "Skill 2", "Skill 3", "Skill 4"],
                "skillGaps": ["Gap Skill 1", "Gap Skill 2"],
                "recommendedCourses": ["Course 1", "Course 2"]
              }
            ]
          }
        `;

        // The newest OpenAI model is "gpt-4o" which was released May 13, 2024. do not change this unless explicitly requested by the user
        const response = await openai.chat.completions.create({
          model: "gpt-4o",
          messages: [{ role: "user", content: prompt }],
          response_format: { type: "json_object" }
        });

        // Extract the content from the response
        const content = response.choices[0].message.content;
        const careerData = JSON.parse(content);

        res.json(careerData);
      } catch (apiError) {
        console.error("OpenAI API error, using fallback response:", apiError);
        // Use fallback mock data if OpenAI API fails
        res.json(mockCareerData);
      }
    } catch (error) {
      console.error("Error analyzing career:", error);
      
      if (error instanceof ZodError) {
        return res.status(400).json({ 
          message: "Invalid input data", 
          errors: error.errors 
        });
      }
      
      // Use fallback mock data for other errors too
      res.json(mockCareerData);
    }
  });

  // AI Assistant chat endpoint
  app.post("/api/chat", async (req, res) => {
    try {
      const { message } = req.body;
      
      if (!message) {
        return res.status(400).json({ message: "Message is required" });
      }

      try {
        // The newest OpenAI model is "gpt-4o" which was released May 13, 2024. do not change this unless explicitly requested by the user
        const response = await openai.chat.completions.create({
          model: "gpt-4o",
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
        // Use fallback mock responses if OpenAI API fails
        const mockResponse = getMockChatResponse(message);
        res.json(mockResponse);
      }
    } catch (error) {
      console.error("Error in chat:", error);
      // Use fallback mock response for any error
      const mockResponse = getMockChatResponse("help");
      res.json(mockResponse);
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
