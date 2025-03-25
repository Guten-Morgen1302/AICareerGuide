import { users, careers, chatHistory, type User, type InsertUser, type Career, type InsertCareer, type ChatHistory, type InsertChatHistory } from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

// Interface for storage operations
export interface IStorage {
  // User operations
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Career operations
  getCareersByUserId(userId: number): Promise<Career[]>;
  createCareer(career: InsertCareer): Promise<Career>;
  
  // Chat history operations
  getChatHistoryByUserId(userId: number): Promise<ChatHistory[]>;
  createChatHistory(chatHistory: InsertChatHistory): Promise<ChatHistory>;
}

export class DatabaseStorage implements IStorage {
  // User operations
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }
  
  // Career operations
  async getCareersByUserId(userId: number): Promise<Career[]> {
    return await db
      .select()
      .from(careers)
      .where(eq(careers.userId, userId));
  }
  
  async createCareer(career: InsertCareer): Promise<Career> {
    const [newCareer] = await db
      .insert(careers)
      .values(career)
      .returning();
    return newCareer;
  }
  
  // Chat history operations
  async getChatHistoryByUserId(userId: number): Promise<ChatHistory[]> {
    return await db
      .select()
      .from(chatHistory)
      .where(eq(chatHistory.userId, userId));
  }
  
  async createChatHistory(chat: InsertChatHistory): Promise<ChatHistory> {
    const [newChat] = await db
      .insert(chatHistory)
      .values(chat)
      .returning();
    return newChat;
  }
}

export const storage = new DatabaseStorage();
