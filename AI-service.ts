import OpenAI from "openai"

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})

export async function chat(messages){

  const response = await client.chat.completions.create({
    model: "gpt-4.1",
    messages
  })

  return response.choices[0].message
}
