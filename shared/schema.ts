import { pgTable, text, serial, integer, boolean, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  name: text("name").notNull().default(""),
  education: text("education").notNull().default(""),
  skills: text("skills").array().notNull().default([]),
  interests: text("interests").array().notNull().default([]),
  careerGoals: text("career_goals").notNull().default(""),
});

export const careers = pgTable("careers", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull(),
  title: text("title").notNull(),
  matchPercentage: integer("match_percentage").notNull(),
  requiredSkills: text("required_skills").array().notNull().default([]),
  skillGaps: text("skill_gaps").array().notNull().default([]),
  recommendedCourses: text("recommended_courses").array().notNull().default([]),
});

export const chatHistory = pgTable("chat_history", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull(),
  message: text("message").notNull(),
  response: text("response").notNull(),
  timestamp: text("timestamp").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
  name: true,
  education: true,
  skills: true,
  interests: true,
  careerGoals: true,
});

export const insertCareerSchema = createInsertSchema(careers).pick({
  userId: true,
  title: true,
  matchPercentage: true,
  requiredSkills: true,
  skillGaps: true,
  recommendedCourses: true,
});

export const insertChatHistorySchema = createInsertSchema(chatHistory).pick({
  userId: true,
  message: true,
  response: true,
  timestamp: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export type InsertCareer = z.infer<typeof insertCareerSchema>;
export type Career = typeof careers.$inferSelect;

export type InsertChatHistory = z.infer<typeof insertChatHistorySchema>;
export type ChatHistory = typeof chatHistory.$inferSelect;

export const careerInputSchema = z.object({
  name: z.string().min(1, "Name is required"),
  education: z.string().min(1, "Education is required"),
  skills: z.string().min(1, "Skills are required"),
  interests: z.string().min(1, "Interests are required"),
  careerGoals: z.string().min(1, "Career goals are required"),
});

export type CareerInput = z.infer<typeof careerInputSchema>;
