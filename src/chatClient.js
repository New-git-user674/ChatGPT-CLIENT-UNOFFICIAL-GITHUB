import OpenAI from "openai";
import dotenv from "dotenv";
import Memory from "./memory.js";
import { tools, runTool } from "./tools.js";

dotenv.config();

export default class ChatClient {
  constructor() {
    this.client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY
    });

    this.memory = new Memory();
  }

  async sendMessage(message) {

    this.memory.add("user", message);

    const response = await this.client.chat.completions.create({
      model: "gpt-4.1",
      messages: this.memory.getHistory(),
      tools
    });

    const msg = response.choices[0].message;

    if (msg.tool_calls) {

      const toolCall = msg.tool_calls[0];

      const result = await runTool(
        toolCall.function.name,
        JSON.parse(toolCall.function.arguments)
      );

      this.memory.add("tool", JSON.stringify(result));

      return result;
    }

    this.memory.add("assistant", msg.content);

    return msg.content;
  }

  async streamMessage(message) {

    this.memory.add("user", message);

    const stream = await this.client.chat.completions.create({
      model: "gpt-4.1",
      messages: this.memory.getHistory(),
      stream: true
    });

    for await (const chunk of stream) {

      const token = chunk.choices?.[0]?.delta?.content;

      if (token) {
        process.stdout.write(token);
      }
    }

    console.log();
  }
}
