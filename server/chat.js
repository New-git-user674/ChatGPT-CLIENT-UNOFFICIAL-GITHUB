import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

let memory = [];

export async function handleChat(req, res) {

  const { message } = req.body;

  memory.push({
    role: "user",
    content: message
  });

  const stream = await client.chat.completions.create({
    model: "gpt-4.1",
    messages: memory,
    stream: true
  });

  res.setHeader("Content-Type", "text/plain");

  let full = "";

  for await (const chunk of stream) {

    const token = chunk.choices?.[0]?.delta?.content;

    if (token) {
      full += token;
      res.write(token);
    }
  }

  memory.push({
    role: "assistant",
    content: full
  });

  res.end();
}
