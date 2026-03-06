import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

class ChatGPTClient {
  constructor() {
    this.client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
  }

  async sendMessage(message) {
    try {
      const response = await this.client.responses.create({
        model: "gpt-4.1",
        input: message
      });

      return response.output_text;
    } catch (error) {
      console.error("ChatGPT Error:", error);
      throw error;
    }
  }
}

export default ChatGPTClient;
