import { apiRequest } from "./queryClient";

// Career analysis function that calls the backend
export async function analyzeCareer(data: {
  name: string;
  education: string;
  skills: string;
  interests: string;
  careerGoals: string;
}) {
  try {
    const response = await apiRequest("POST", "/api/analyze-career", data);
    return response.json();
  } catch (error) {
    console.error("Error analyzing career:", error);
    throw error;
  }
}

// Chat assistant function
export async function sendChatMessage(message: string) {
  try {
    const response = await apiRequest("POST", "/api/chat", { message });
    return response.json();
  } catch (error) {
    console.error("Error sending chat message:", error);
    throw error;
  }
}

// Types for career analysis response
export interface CareerRecommendation {
  title: string;
  matchPercentage: number;
  requiredSkills: string[];
  skillGaps: string[];
  recommendedCourses: string[];
}

export interface CareerAnalysisResponse {
  careers: CareerRecommendation[];
}

// Types for chat response
export interface ChatResponse {
  response: string;
}
